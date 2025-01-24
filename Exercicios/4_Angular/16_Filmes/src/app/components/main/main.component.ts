import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchAreaComponent } from '../search-area/search-area.component';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-main',
  imports: [SearchAreaComponent, MovieCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent 
{
  movieCount: number;

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(public GetMoviesService: MoviesService) {
    this.movieCount = this.GetMoviesService.getMovies().length;
  }

  

  setLikedState(movie: Movie)
  {
    this.GetMoviesService.updateMovie(movie);
  }
}
