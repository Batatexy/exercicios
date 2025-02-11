import { Component, Type } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { HeaderComponent } from '../../components/header/header.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { Credits } from '../../models/credits';
import { Cast } from '../../models/cast';
import { ModalComponent } from "../../components/modal/modal.component";
import { Crew } from '../../models/crew';
import { ConfigurationsService } from '../../services/configurations.service';
import { ReviewComponent } from '../../components/review/review.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../models/review';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-movie-details',
  imports: [
    WhiteCardComponent, HeaderComponent, CommonModule,
    AvatarComponent, BadgeComponent, ReviewComponent,
    ModalComponent, ReactiveFormsModule, FormsModule

  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  //Registro de Usuário
  newReview: FormGroup;
  newReviewInvalid: boolean = false;

  reviewContentModel: string = '';
  watchedDateModel: string = '';





  sliceCast: number = 8;
  nameLength: number = 20;

  id?: number;
  movie?: Movie;

  credits?: Credits;
  director?: string;

  reviews?: Array<Review>;
  reviewSlice: number = 4;

  constructor(private route: ActivatedRoute, private getMoviesService: MoviesService, private getReviewsService: ReviewsService,
    private getRouter: Router, private getConfigurationsService: ConfigurationsService, getUserService: UserService) {

    this.newReview = new FormGroup({
      reviewContent: new FormControl('', [Validators.minLength(3), Validators.required]),
      watchedDate: new FormControl('', [Validators.minLength(3), Validators.required])
    });

  }

  //Caso o ID do filme não exista, redireciona para a página de filmes
  ngOnInit(): void {
    console.clear();
    console.log(this.getConfigurationsService.getSelectedLanguage());

    this.getConfigurationsService.selectedLanguage$.subscribe({
      next: (language) => {
        console.log(language);
        this.getInformation();
      }
    });

    this.getInformation();

    //Validação dos campos de Review
    this.newReview.get('reviewContent')?.valueChanges.subscribe({
      next: (val) => {
        if (this.newReview.get('reviewContent')?.errors) {
          this.newReviewInvalid = true;
        } else {
          this.newReviewInvalid = false;
        }
      },
    });
  }

  public getInformation() {
    //ID passado pelo URL
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    //Pegar da API: Detalhes do Filme
    this.getMoviesService.getMovieById(this.id, this.getConfigurationsService.getSelectedLanguage()).subscribe({
      next: (res) => {
        console.log("Movie:", res);
        this.movie = res;
        this.movie.vote_average /= 2;
      },
      error: () => {
        this.getRouter.navigate(['/movies']);
      }
    });

    //Pegar da API: Créditos -> Elenco e Equipe de Produção
    this.getMoviesService.getCredits(this.id, this.getConfigurationsService.getSelectedLanguage()).subscribe({
      next: (res) => {
        console.log("Credits:", res);
        this.credits = res;
      },
      error: () => {
        console.error("Erro");
      }
    });

    this.director = "";

    this.credits?.crew.forEach(member => {
      if (member.job == "Director") {
        this.director = member.name;
      }
    });

    this.getReviewsByMovieID();
  }

  public getReviewsByMovieID() {
    this.getReviewsService.getReviewsByMovieID(this.id).subscribe({
      next: (res) => {
        this.reviews = res;
        console.log("reviews", this.reviews);

      },
      error: () => {
        console.error("Error");
      }
    });

    this.calculateStars(1);
  }

  public getReviewsSliced(): Array<Review> | undefined {
    return this.reviews?.reverse().slice(0, this.reviewSlice);
  }

  rating: number = 1;
  ratingArray: Array<{ state: string; }> = [{ state: "half" }, { state: "null" }, { state: "null" }, { state: "null" }, { state: "null" }];

  public calculateStars(newRating: number): void {
    let filledStars: number = Math.floor(newRating / 2);
    let halfStar: boolean = newRating % 2 !== 0;

    this.ratingArray.forEach((star, index) => {
      if (index < filledStars) {
        star.state = "fill";
      } else if (index === filledStars && halfStar) {
        star.state = "half";
      } else {
        star.state = "null";
      }
    });
  }

  public setRating(rating: number): void {
    this.rating = rating;
    this.calculateStars(this.rating);
  }

  public starsReset(): void {
    this.calculateStars(this.rating);
  }

  public getRange(number: number): Array<number> {
    return new Array(number);
  }

  //Modificar
  reviewAlreadyUploaded() {
    // if (userID == uma review já enviada com este id){
    //   return false
    // }

    return true;
  }


  submitReview() {
    if (!this.newReview.invalid && this.movie) {
      let newReview = this.newReview.value;

      this.getReviewsService.sendReview(
        {
          id: 2,
          userID: 1,

          movieID: this.movie?.id,

          reviewContent: newReview['reviewContent'],
          watchedDate: newReview['watchedDate'],
          rating: this.rating,
          reviewDate: 'hora atual'

        }).subscribe({
          next: (val) => console.log(val)
        });

      this.getReviewsByMovieID();
    }
  }

















  public getImagesUrl(): string {
    return this.getMoviesService.getImagesUrl();
  }

  public getCastSliced(): Array<Cast> | undefined {
    return this.credits?.cast?.slice(0, this.sliceCast);
  }

  public getCast(): Array<Cast> | undefined {
    return this.credits?.cast;
    //.slice(this.slice)
  }

  public getCrew(): Array<Crew> | undefined {
    return this.credits?.crew;
  }
}
