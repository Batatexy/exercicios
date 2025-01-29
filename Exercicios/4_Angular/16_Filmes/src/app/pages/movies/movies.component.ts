import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MoviesService } from '../../services/movies.service';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { TitleComponent } from "../../components/title/title.component";
import { CommonButtonComponent } from "../../components/common-button/common-button.component";
import { SearchAreaComponent } from "../../components/search-area/search-area.component";

@Component({
  selector: 'app-movies',
  imports: [MovieCardComponent, BreadCrumbComponent, WhiteCardComponent, CommonModule, TitleComponent, CommonButtonComponent, SearchAreaComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  //Injeção de dependências: importar a classe GetMoviesService
  constructor(public GetMoviesService: MoviesService) { }

}
