import { Component } from '@angular/core';
import { SearchAreaComponent } from '../../components/search-area/search-area.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { SearchMoviesService } from '../../services/search-movies.service';
import { HeaderComponent } from '../../components/header/header.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [SearchAreaComponent, MovieCardComponent, HeaderComponent, WhiteCardComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  length: number = 2;

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(public GetMoviesService: MoviesService, public GetSearchMoviesService: SearchMoviesService) { }

  increaseMovieLength() {
    this.length += 2;

    if (this.length > this.GetSearchMoviesService.getMoviesCount()) {
      this.length = this.GetSearchMoviesService.getMoviesCount();
    }
    console.log(this.length);
  }
}
