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

  constructor(private http: HttpClient, private getConfigurations: ConfigurationsService) { }

  // if(environment.production) {
  //   // Código específico para produção
  // } else {
  // // Código específico para desenvolvimento
  // } 
  private movies: Array<Movie> = [];

  private search: string = "";
  private likedMovies: Array<LikedMovie> = [];

  //Variavel ajustda pelo usuario
  private lengthIncrease: number = 8;
  private length: number = this.lengthIncrease;

  //API De Filmes
  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private posterPathUrl = "https://image.tmdb.org/t/p/w500/";
  private defaultHeaders = {
    Authorization: 'Bearer ' + environment.apiKey,
  };

  getApiUrl(): string {
    return this.apiUrl;
  }

  getPostPathUrl(): string {
    return this.posterPathUrl;
  }

  public getPopularMovies(page: number): Observable<{ results: Movie[]; }> {
    // tipar o retorno

    let params = new HttpParams(); // query params
    params = params.set('language', this.getConfigurations.getLanguage());
    params = params.set('page', page);

    return this.http.get<{ results: []; }>(`${this.apiUrl}/popular`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }

  public getMovieById(id: number): Observable<Movie> {
    // tipar o retorno

    let params = new HttpParams(); // query params
    params = params.set('language', this.getConfigurations.getLanguage());
    params = params.set('movie_id', id);

    return this.http.get<Movie>(`${this.apiUrl}/${id}`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }

  public getMoviesByName(): Array<Movie> {
    if (this.search != "") {
      let searchMovies: Array<Movie> = [];

      this.movies.slice(0, this.length).forEach((movie, index) => {

        if (movie.title.toLowerCase().includes(this.search.toLowerCase())) {
          searchMovies.push(movie);
        }

      });

      return searchMovies;
    }

    return this.movies.slice(0, this.length);
  }









  public getCredits(id: number): Observable<Credits> {
    // tipar o retorno

    let params = new HttpParams(); // query params
    params = params.set('language', this.getConfigurations.getLanguage());

    return this.http.get<Credits>(`${this.apiUrl}/${id}/credits`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }










  //Aumentar o range de filmes exibidos na tela // Clickar no botão Ver Mais
  public increaseMovieLength(): void {
    let length = this.getLength() + this.getLengthIncrease();

    if (length > this.movies.length) {
      this.setLength(this.movies.length);
    }
    else {
      this.setLength(length);
    }
  }

  public createZeroBeforeNumbers(number: number,): string {
    let numberToString: string = String(number);

    if (number < 10) {
      numberToString = "0" + number;
    }

    return numberToString;
  }



  //Getters and Setters
  public addLikedMovies(movie: Movie) {
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

  public setLikedMovies(likedMovies: Array<LikedMovie>) {
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
  public getLength(): number {
    return this.length;
  }

  //Definir o range de filmes exibidos
  public setLength(length: number) {
    this.length = length;
  }

  //Pegar o range que se é adicionado a cada clique no ver mais
  public getLengthIncrease(): number {
    return this.lengthIncrease;
  }

  //Definir o range que se é adicionado a cada clique no ver mais
  public setLengthIncrease(lengthIncrease: number) {
    this.lengthIncrease = lengthIncrease;
  }

  public getMovies(): Array<Movie> {
    return this.movies;
  }

  public setMovies(movies: Array<Movie>): void {
    this.movies = movies;
  }

}
