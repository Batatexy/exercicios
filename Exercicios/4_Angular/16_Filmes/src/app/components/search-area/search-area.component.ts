import { Component, Input, SimpleChanges } from '@angular/core';
import { SearchMoviesService } from '../../services/search-movies.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-area',
  imports: [FormsModule,],
  templateUrl: './search-area.component.html',
  styleUrl: './search-area.component.scss'
})
export class SearchAreaComponent {
  @Input() length: number = 0;
  searchMovie: string = "";

  constructor(public GetSearchMoviesService: SearchMoviesService) { }

  changeValue() {
    this.GetSearchMoviesService.setSearch(this.searchMovie);
  }
}
