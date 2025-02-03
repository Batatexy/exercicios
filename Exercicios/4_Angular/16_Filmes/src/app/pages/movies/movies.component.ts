import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MoviesService } from '../../services/movies.service';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { TitleComponent } from "../../components/title/title.component";
import { SearchAreaComponent } from "../../components/search-area/search-area.component";
import { CommonActionButtonComponent } from '../../components/common-action-button/common-action-button.component';
import { Movie } from '../../models/movie';

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
export class MoviesComponent {

  movies!: Array<Movie>;

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(private getMoviesService: MoviesService) { }

  ngOnInit(){
    this.movies = this.getMoviesService.getMoviesByName(this.getMoviesService.getSearch())
  }

  public getMoviesByName(): Array<Movie> {
    return this.getMoviesService.getMoviesByName(this.getMoviesService.getSearch(), this.getMoviesService.getLength())
  }

  public getMoviesOnScreen(){
    return (this.getMoviesService.createZeroBeforeNumbers(this.getMoviesByName().length));
  }

  public moreThanOneMovieFounded(){
    if (this.getMoviesByName().length != 1){
      return "s"
    }

    return ""
  }

  public getAllMoviesCount(){
    return (this.getMoviesService.createZeroBeforeNumbers(this.getMoviesService.getAllMoviesCount()));
  }

  public increaseMovieLength() {
    this.getMoviesService.increaseMovieLength();
  }

  public getSearch(): string{
    return this.getMoviesService.getSearch()
  }

  public setLikedMovies(movie: Movie){
    this.getMoviesService.addLikedMovies(movie)
  }

  public haveMoviesToGet(){
    if (this.getMoviesService.getLength() < this.getMoviesService.getAllMoviesCount()){
      return true
    }

    return false
  }
}
