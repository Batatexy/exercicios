import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { LikedMovie } from '../models/likedMovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private search: string = "";
  private likedMovies: Array<LikedMovie> = [];
  private movies: Array<Movie> = this.getMoviesAPI();

  //Variavel ajustda pelo usuario
  private lengthIncrease: number = 1;
  private length: number = this.lengthIncrease;

  constructor() { }

  //Filtrar um NOME no array de Filmes // Se "" retorna todos o array de Filmes inteiro // Se Breakpoint existir, vai todos os filmes que estão na tela
  public getMoviesByName(search: string, breakpoint?: number): Array<Movie> {
    let searchMovies: Array<Movie> = [];

    if ((breakpoint)) {
      this.movies.forEach((movie, index) => {
        if (index < breakpoint) {
          if (search != "") {
            if (movie.name.toLowerCase().includes(search.toLowerCase())) {
              searchMovies.push(movie);
            }
          }
          else {
            searchMovies.push(movie);
          }
        }
      });

      return searchMovies;
    }
    else {
      return this.movies;
    }
  }

  //Filtrar um ID no array de Filmes
  public getMovieByID(id: number): Movie | null {
    let returnMovie: Movie | null = null;
    this.movies.forEach(movie => {
      if (movie.id == id) {
        returnMovie = movie;
      }
    });

    return returnMovie;
  }

  public createZeroBeforeNumbers(number: number,): string {
    let numberToString: string = String(number);

    if (number < 10) {
      numberToString = "0" + number;
    }

    return numberToString;
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



  //Pegar o total de filmes da api em number
  public getAllMoviesCount(): number {
    return this.movies.length;
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
  }

  //Pegar o que foi digitado pelo usuário
  public getSearch(): string {
    return this.search;
  }

  //Definir o que foi digitado pelo usuário
  public setSearch(search: string): void {
    this.search = search;
  }

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











  public getMoviesAPI(): Array<Movie> {
    return [
      { id: 0, name: "Mufasa", date: "02/08/2023", image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png" },
      { id: 1, name: "Sonic 3", date: "25/12/2024", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg" },
      { id: 2, name: "Interestelar", date: "06/11/2014", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg" },
      { id: 3, name: "WALL-E", date: "27/06/2008", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fkpbPp3vrHfYNDrD6xHDfO6YKyQ.jpg" },
      { id: 4, name: "Tropa de Elite", date: "12/10/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg" },
      { id: 5, name: "Transformers", date: "18/07/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s7PhLSxGvwd9bl9pkY7WSvHYhN.jpg" },
      { id: 6, name: "Alien: O Oitavo Passageiro", date: "20/08/1979", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yH05Ft4egz5DYy4SLWYYuVMoGqC.jpg" },
      { id: 7, name: "Mufasa", date: "02/08/2023", image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png" },
      { id: 8, name: "Sonic 3", date: "25/12/2024", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg" },
      { id: 9, name: "Interestelar", date: "06/11/2014", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg" },
      { id: 10, name: "WALL-E", date: "27/06/2008", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fkpbPp3vrHfYNDrD6xHDfO6YKyQ.jpg" },
      { id: 11, name: "Tropa de Elite", date: "12/10/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg" },
      { id: 12, name: "Transformers", date: "18/07/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s7PhLSxGvwd9bl9pkY7WSvHYhN.jpg" },
      { id: 13, name: "Alien: O Oitavo Passageiro", date: "20/08/1979", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yH05Ft4egz5DYy4SLWYYuVMoGqC.jpg" },
      { id: 14, name: "Mufasa", date: "02/08/2023", image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png" },
      { id: 15, name: "Sonic 3", date: "25/12/2024", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg" },
      { id: 16, name: "Interestelar", date: "06/11/2014", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg" },
      { id: 17, name: "WALL-E", date: "27/06/2008", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fkpbPp3vrHfYNDrD6xHDfO6YKyQ.jpg" },
      { id: 18, name: "Tropa de Elite", date: "12/10/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg" },
      { id: 19, name: "Transformers", date: "18/07/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s7PhLSxGvwd9bl9pkY7WSvHYhN.jpg" },
      { id: 20, name: "Alien: O Oitavo Passageiro", date: "20/08/1979", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yH05Ft4egz5DYy4SLWYYuVMoGqC.jpg" },
      { id: 21, name: "Mufasa", date: "02/08/2023", image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png" },
      { id: 22, name: "Sonic 3", date: "25/12/2024", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg" },
      { id: 23, name: "Interestelar", date: "06/11/2014", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg" },
      { id: 24, name: "WALL-E", date: "27/06/2008", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fkpbPp3vrHfYNDrD6xHDfO6YKyQ.jpg" },
      { id: 25, name: "Tropa de Elite", date: "12/10/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg" },
      { id: 26, name: "Transformers", date: "18/07/2007", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s7PhLSxGvwd9bl9pkY7WSvHYhN.jpg" },
      { id: 27, name: "Alien: O Oitavo Passageiro", date: "20/08/1979", image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yH05Ft4egz5DYy4SLWYYuVMoGqC.jpg" },


    ];
  }
}
