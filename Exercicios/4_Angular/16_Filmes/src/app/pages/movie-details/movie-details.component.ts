import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
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
  newRegister: FormGroup;
  newRegisterInvalid: boolean = false;

  emailModel: string = '';
  nameModel: string = '';



  //Registro de Usuário
  newReview: FormGroup;
  newReviewInvalid: boolean = false;

  reviewContentModel: string = '';
  watchedDateModel: string = '';
  ratingModel: string = '';





  slice: number = 8;
  nameLength: number = 20;

  id?: number;
  movie?: Movie;
  credits?: Credits;
  director?: string;
  reviews?: Array<Review>;

  constructor(private route: ActivatedRoute, private getMoviesService: MoviesService, private getReviewsService: ReviewsService,
    private getRouter: Router, private getConfigurationsService: ConfigurationsService,) {

    this.newRegister = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email])
    });

    this.newReview = new FormGroup({
      reviewContent: new FormControl('', [Validators.minLength(3), Validators.required]),
      watchedDate: new FormControl('', [Validators.minLength(3), Validators.required]),
      rating: new FormControl('', [Validators.minLength(3), Validators.required])
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

    //Validação dos campos de Register
    this.newRegister.get('name')?.valueChanges.subscribe({
      next: (val) => {
        if (this.newRegister.get('name')?.errors) {
          this.newRegisterInvalid = true;
        } else {
          this.newRegisterInvalid = false;
        }
      },
    });

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

  submitReview() {
    if (!this.newReview.invalid && this.movie) {
      let newReview = this.newReview.value;

      this.getReviewsService.sendReview(
        {
          id: 2,
          userID: 2,

          movieID: this.movie?.id,

          reviewContent: newReview['reviewContent'],
          watchedDate: newReview['watchedDate'],
          rating: newReview['rating'],
          reviewDate: 'hora atual'

        }).subscribe({
          next: (val) => console.log(val)
        });
    }
  }

  submitRegister() {
    if (!this.newRegister.invalid) {
      let newUser = this.newRegister.value;

      this.getReviewsService.sendUser({ id: 2, name: newUser['name'], email: newUser['email'] }).subscribe({
        next: (val) => console.log(val)
      });
    }
  }














  public getInformation() {
    //ID passado pelo URL
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    //Pegar da API: Detalhes do Filme
    this.getMoviesService.getMovieById(this.id, this.getConfigurationsService.getSelectedLanguage()).subscribe({
      next: (res) => {
        console.log("Movie:", res);
        this.movie = res;
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

    //Pegar do JSON-Server: Reviews
    console.log(this.id);

    this.getReviewsService.getReviews(this.id).subscribe({
      next: (res) => {
        this.reviews = res;
        console.log("reviews", this.reviews);

      },
      error: () => {
        console.error("Error");
      }
    });

    this.credits?.crew.forEach(member => {
      if (member.job == "Director") {
        this.director = member.name;
      }
    });
  }





  public getImagesUrl(): string {
    return this.getMoviesService.getImagesUrl();
  }

  public getCastSliced(): Array<Cast> | undefined {
    return this.credits?.cast?.slice(0, this.slice);
  }

  public getCast(): Array<Cast> | undefined {
    return this.credits?.cast;
    //.slice(this.slice)
  }

  public getCrew(): Array<Crew> | undefined {
    return this.credits?.crew;
  }
}
