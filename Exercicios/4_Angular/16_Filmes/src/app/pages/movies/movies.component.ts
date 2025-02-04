import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MoviesService } from '../../services/movies.service';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { TitleComponent } from "../../components/title/title.component";
import { SearchAreaComponent } from "../../components/search-area/search-area.component";
import { CommonActionButtonComponent } from '../../components/common-action-button/common-action-button.component';
import { Movie } from '../../models/movie';
import { ObservablesService } from '../../services/observables.service';



@Component({
  selector: 'app-movies',
  imports:
    [
      MovieCardComponent, BreadCrumbComponent, WhiteCardComponent, CommonModule, TitleComponent,
      CommonActionButtonComponent, SearchAreaComponent

    ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {





  movies!: Array<Movie>;

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(private getMoviesService: MoviesService, private getObservables: ObservablesService) { }

  ngOnInit(): void {
    this.movies = this.getMoviesService.getMoviesByName(this.getMoviesService.getSearch());

  }

  ngAfterContentInit() {
    this.getObservables.counter.subscribe({
      next: (count) => {
        this.increaseMovieLength();
        console.log(count);
      },
      error: (erro) => console.error('Erro: ', erro),
      //Complete não recebe parâmetros
      complete: () => {

        console.log('Concluído');
      },

    });

  }


















  //Pegar o que foi digitado na serchBar, e pegar o tamanho de filmes que estão sendo exibidos, envialos como parametros para a função do service
  //de buscar o filme pelo nome, pegar seu retorno, e retornar para a criação dos blocos na página
  public getMoviesByName(): Array<Movie> {
    return this.getMoviesService.getMoviesByName(this.getMoviesService.getSearch(), this.getMoviesService.getLength());
  }

  public getMoviesOnScreen() {
    return (this.getMoviesService.createZeroBeforeNumbers(this.getMoviesByName().length));
  }

  public moreThanOneMovieFounded() {
    if (this.getMoviesByName().length != 1) {
      return "s";
    }

    return "";
  }

  public getAllMoviesCount() {
    return (this.getMoviesService.createZeroBeforeNumbers(this.getMoviesService.getAllMoviesCount()));
  }

  public increaseMovieLength() {
    this.getMoviesService.increaseMovieLength();
  }

  public getSearch(): string {
    return this.getMoviesService.getSearch();
  }

  public setLikedMovies(movie: Movie) {
    this.getMoviesService.addLikedMovies(movie);
  }

  public haveMoviesToGet() {
    if (this.getMoviesService.getLength() < this.getMoviesService.getAllMoviesCount()) {
      return true;
    }

    return false;
  }
}
