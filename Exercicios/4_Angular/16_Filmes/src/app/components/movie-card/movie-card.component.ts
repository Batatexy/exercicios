import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent 
{
  @Input() movie: Movie = {id: 0, name: "", image: "", date: "", liked: false}

  @Output() EventEmitterMovie: EventEmitter<Movie> = new EventEmitter();
  sendLikedState(movie: Movie): void {
    movie.liked = !movie.liked;
    this.EventEmitterMovie.emit(movie);
  }
}
