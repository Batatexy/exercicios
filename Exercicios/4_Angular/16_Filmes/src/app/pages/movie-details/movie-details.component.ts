import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

@Component({
  selector: 'app-movie-details',
  imports: [
    WhiteCardComponent, HeaderComponent, CommonModule,
    AvatarComponent, BadgeComponent,
    ModalComponent
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  nameLength: number = 20;





  movie?: Movie;
  credits?: Credits;
  director?: string;

  constructor(private route: ActivatedRoute, private getMoviesService: MoviesService,
    private getRouter: Router, private getConfigurationsService: ConfigurationsService) { }
  private slice: number = 4;

  //Caso o ID do filme não exista, redireciona para a página de filmes
  ngOnInit(): void {
    console.clear();

    //ID passado pelo URL
    let id: number = Number(this.route.snapshot.paramMap.get("id"));

    //Detalhes do Filme
    this.getMoviesService.getMovieById(id, this.getConfigurationsService.getSelectedLanguage()).subscribe({
      next: (res) => {
        console.log("Movie:", res);
        this.movie = res;
      },
      error: () => {
        this.getRouter.navigate(['/movies']);
      }
    });

    //Pegar da API, Créditos: Elenco e Equipe de Produção
    this.getMoviesService.getCredits(id, this.getConfigurationsService.getSelectedLanguage()).subscribe({
      next: (res) => {
        console.log("Credits:", res);
        this.credits = res;
      },
      error: () => {
        console.error("Erro");
      }
    });
  }

  ngAfterContentInit(): void {
    //this.director = this.credits?.crew.filter((member) => member.job == "Director")

    this.credits?.crew.forEach(member => {
      if (member.job == "Director") {
        this.director = member.name;
      }
    });
  }

  public getImagesUrl(): string {
    return this.getMoviesService.getImagesUrl();
  }


  public creditsSlice(): Array<Cast> | undefined {
    return this.credits?.cast?.slice(0, this.slice);
  }

  public getCast(): Array<Cast> | undefined {
    return this.credits?.cast;
    //.slice(this.slice)
  }

  public getCrew(): Array<Crew> | undefined {
    return this.credits?.crew;
    //.slice(this.slice)
  }


  myModal = document.getElementById('myModal');
  myInput = document.getElementById('myInput');

  public seeMoreActors() {
    console.log(this.getMyModal());

    this.getMyModal()?.addEventListener('shown.bs.modal', () => {
      this.myInput?.focus();
    });
  }

  public getMyModal() {
    return this.myModal;
  }

  public getMyInput() {
    return this.myInput;
  }
}
