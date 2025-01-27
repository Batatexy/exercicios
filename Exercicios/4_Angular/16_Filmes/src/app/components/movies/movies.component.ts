import { Component } from '@angular/core';
import { SearchAreaComponent } from '../search-area/search-area.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { SearchMoviesService } from '../../services/search-movies.service';
import { HeaderComponent } from '../../header/header.component';
import { WhiteCardComponent } from "../white-card/white-card.component";

@Component({
  selector: 'app-movies',
  imports: [SearchAreaComponent, MovieCardComponent, HeaderComponent, WhiteCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent 
{
  //Injeção de dependências: importar a classe GetMoviesService
  constructor(public GetMoviesService: MoviesService, public GetSearchMoviesService: SearchMoviesService) {}

  setLikedState(movie: Movie)
  {
    this.GetMoviesService.updateMovie(movie);
  }
}
