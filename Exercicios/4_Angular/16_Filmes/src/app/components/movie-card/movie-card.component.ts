import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { LikedMovie } from '../../models/likedMovie';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() eventEmitterMovie: EventEmitter<Movie> = new EventEmitter();

  constructor(private getMoviesService: MoviesService) { }

  sendLikedState(movie: Movie): void {
    this.eventEmitterMovie.emit(movie);
  }

  getLikedState(){
    let likedMovies: Array<LikedMovie> =  this.getMoviesService.getLikedMovies()
    let likedState = false;

    likedMovies.forEach((likedMovie, index) => 
    {
      if (likedMovie.movieID == this.movie.id){
        likedState = likedMovie.liked;
      }
    });

    return likedState;
  }
}
