import { Injectable, SimpleChanges } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  allMoviesCount: number = 0;
  search: string = "";

  //Injeção de dependências: importar a classe GetMoviesService
  constructor(public GetMoviesService: MoviesService) { }

  getAllMoviesCount(): number {
    this.allMoviesCount = this.GetMoviesService.movies.length;
    return this.allMoviesCount;
  }

  setAllMovieCount(allMoviesCount: number): void {
    this.allMoviesCount = allMoviesCount;
  }

  getMoviesCount(): number {
    this.allMoviesCount = this.GetMoviesService.getMoviesByName(this.search).length;
    return this.allMoviesCount;
  }

  getSearch(): string {
    return this.search;
  }

  setSearch(search: string): void {
    this.search = search;
  }
}
