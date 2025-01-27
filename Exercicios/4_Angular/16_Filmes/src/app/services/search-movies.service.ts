import { Injectable, SimpleChanges } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService 
{
  movieCount: number;
  search: string = "";
  
  //Injeção de dependências: importar a classe GetMoviesService
  constructor(public GetMoviesService: MoviesService) {
    this.movieCount = this.GetMoviesService.getMoviesByName("").length;
  }
 
  getMovieCount(): number{
    this.movieCount = this.GetMoviesService.getMoviesByName(this.search).length;
    return this.movieCount;
  }

  setMovieCount(movieCount: number): void{
    this.movieCount = movieCount;
  }

  getSearch(): string{
    return this.search;
  }

  setSearch(search: string): void{
    this.search = search;
  }
}
