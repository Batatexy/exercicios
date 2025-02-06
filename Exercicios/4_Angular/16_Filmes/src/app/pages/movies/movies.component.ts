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
      MovieCardComponent, BreadCrumbComponent, WhiteCardComponent, CommonModule, TitleComponent, CommonActionButtonComponent, SearchAreaComponent,

    ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(private getMoviesService: MoviesService, private getObservables: ObservablesService) { }

  ngOnInit(): void {
    console.clear();

    if (this.getMoviesService.getLength() == this.getMoviesService.getLengthIncrease()) {
      this.getMoviesService.getPopularMovies(1).subscribe({
        next: (res) => {
          this.getMoviesService.setMovies(res.results);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log("Filmes:", this.getMoviesService.getMovies());
        }
      });
    }
  }

  ngAfterContentInit(): void {
    let scrollY: number = Number(localStorage.getItem('scrollY')) || 0;
    //Provavelmente o Angular tem seu própria forma de manipular scroll, já que parece que a pagina é inteira fixa
    window.scrollTo(0, scrollY);
  }

  ngOnDestroy(): void {
    //this.getMoviesService.getPopularMovies(1).u;
    localStorage.setItem('scrollY', String(window.scrollY));
  }



  public pluralizeMovies(): boolean {
    if (this.getMoviesService.getMoviesByName().length == 1) {
      return false;
    }

    return true;
  }

  public haveMoviesToGet(): boolean {
    //Se bater no final do array dos filmes da API
    return true;
  }



  public getMoviesByName(): Array<Movie> {
    return this.getMoviesService.getMoviesByName();
  }

  public increaseMovieLength(): void {
    this.getMoviesService.increaseMovieLength();
  }

  public getLength(): number {
    return this.getMoviesService.getLength();
  }

  public getSearch(): string {
    return this.getMoviesService.getSearch();
  }

  public setLikedMovies(movie: Movie): void {
    this.getMoviesService.addLikedMovies(movie);
  }

  public createZeroBeforeNumbers(number: number,): string {
    return this.getMoviesService.createZeroBeforeNumbers(number);
  }
}
