import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { LikedMovie } from '../models/likedMovie';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ConfigurationsService } from './configurations.service';
import { Credits } from '../models/credits';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private getConfigurationsService: ConfigurationsService) { }

  // if(environment.production) {
  //   // Código específico para produção
  // } else {
  // // Código específico para desenvolvimento
  // } 

  //Filmes
  private movies: Array<Movie> = [];
  private page: number = 1;

  //SearchBar
  private search: string = "";
  private likedMovies: Array<LikedMovie> = [];

  //Variavel ajustda pelo usuario
  private rangeIncrease: number = 8;
  private range: number = this.rangeIncrease;

  //API De Filmes
  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private imagesUrl = "https://image.tmdb.org/t/p/w500/";
  private defaultHeaders = {
    Authorization: 'Bearer ' + environment.apiKey,
  };

  public getPopularMovies(page: number, language: string): Observable<{ results: Array<Movie>; }> {
    // tipar o retorno

    let params = new HttpParams(); // query params
    params = params.set('language', language);
    params = params.set('page', page);

    return this.http.get<{ results: []; }>(`${this.apiUrl}/popular`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }

  public getMovieById(id: number, language: string): Observable<Movie> {
    // tipar o retorno

    let params = new HttpParams(); // query params
    params = params.set('language', language);

    return this.http.get<Movie>(`${this.apiUrl}/${id}`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }



  public getMoviesByName(): Array<Movie> {
    if (this.search != "") {
      let searchMovies: Array<Movie> = [];

      this.movies.slice(0, this.range).forEach((movie) => {
        if (movie.title.toLowerCase().includes(this.search.toLowerCase())) {
          searchMovies.push(movie);
        }
      });

      return searchMovies;
    }

    return this.movies.slice(0, this.range);
  }


  public getCredits(id: number, language: string): Observable<Credits> {
    // tipar o retorno

    let params = new HttpParams(); // query params
    params = params.set('language', language);

    return this.http.get<Credits>(`${this.apiUrl}/${id}/credits`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }

  //Aumentar o range de filmes exibidos na tela // Clickar no botão Ver Mais
  public increaseMovieRange(): void {

    this.addRange();

    if (this.range >= this.movies.length) {
      this.page++;

      this.getPopularMovies(this.page, this.getConfigurationsService.getSelectedLanguage()).subscribe({
        next: (res) => {
          this.addMovies(res.results);
          console.log("Filmes:", this.movies);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }














  //Getters and Setters
  public addLikedMovies(movie: Movie): void {
    let likedMovies: Array<LikedMovie> = this.getLikedMovies();
    let toPush: boolean = true;

    likedMovies.forEach((likedMovie, index) => {
      if (likedMovie.movieID == movie.id) {
        likedMovie.liked = !likedMovie.liked;
        toPush = false;
      }
    });

    if (toPush) {
      likedMovies.push({ movieID: movie.id, liked: true });
    }

    this.setLikedMovies(likedMovies);
  }

  public setLikedMovies(likedMovies: Array<LikedMovie>): void {
    this.likedMovies = likedMovies;
  }

  public getLikedMovies(): Array<LikedMovie> {
    return this.likedMovies;
  };

  //Pegar o que foi digitado pelo usuário
  public getSearch(): string {
    return this.search;
  }

  //Definir o que foi digitado pelo usuário
  public setSearch(search: string): void {
    this.search = search;
  };

  //Pegar o range de filmes exibidos
  public getRange(): number {
    return this.range;
  }

  //Definir o range de filmes exibidos
  public addRange(): void {
    this.range += this.rangeIncrease;
  }

  //Pegar o range que se é adicionado a cada clique no ver mais
  public getRangeIncrease(): number {
    return this.rangeIncrease;
  }

  //Definir o range que se é adicionado a cada clique no ver mais
  public setRangeIncrease(rangeIncrease: number): void {
    this.rangeIncrease = rangeIncrease;
  }

  public getMovies(): Array<Movie> {
    return this.movies;
  }

  public setMovies(movies: Array<Movie>): void {
    this.movies = movies;
  }

  public addMovies(newMovies: Array<Movie>): void {
    this.movies = this.movies.concat(newMovies);
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }

  public getImagesUrl(): string {
    return this.imagesUrl;
  }

  public getPage(): number {
    return this.page;
  }

  public setPage(page: number): void {
    this.page = page;
  }
}
