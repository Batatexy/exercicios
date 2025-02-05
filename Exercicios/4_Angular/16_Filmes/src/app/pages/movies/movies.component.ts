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

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(private getMoviesService: MoviesService, private getObservables: ObservablesService) { }

  ngOnInit(): void {
    //this.movies = this.getMoviesService.getMoviesByName(this.getMoviesService.getSearch());

    this.getMoviesService.getPopularMovies(1).subscribe({
      next: (res) => {
        this.getMoviesService.setMovies(res.results);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log(this.getMoviesService.getMovies());
      }
    });
  }

  ngAfterContentInit() {

  }

  ngOnDestroy() {
    //this.getMoviesService.getPopularMovies(1).u;
  }








  public getMoviesByName() {

    return this.getMoviesService.getMoviesByName();

  }



  public increaseMovieLength() {
    this.getMoviesService.increaseMovieLength();
  }

  public getLength() {
    return this.getMoviesService.getLength();
  }

  public getSearch(): string {
    return this.getMoviesService.getSearch();
  }

  public setLikedMovies(movie: Movie) {
    this.getMoviesService.addLikedMovies(movie);
  }

  public haveMoviesToGet() {
    if (this.getMoviesService.getLength() < this.getMoviesService.getMovies().length) {
      return true;
    }

    return false;
  }
}
