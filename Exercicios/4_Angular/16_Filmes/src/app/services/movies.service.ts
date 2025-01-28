import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() { }

  getMoviesAPI(): Array<Movie> {
    return [
      {
        id: 0,
        name: "Mufasa",
        date: "02/08/2023",
        image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
        liked: false,
      },
      {
        id: 1,
        name: "Sonic 3",
        date: "25/12/2024",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg",
        liked: true,
      },
      {
        id: 2,
        name: "Interestelar",
        date: "06/11/2014",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
        liked: false,
      },
      {
        id: 3,
        name: "WALL-E",
        date: "27/06/2008",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fkpbPp3vrHfYNDrD6xHDfO6YKyQ.jpg",
        liked: true,
      },
      {
        id: 4,
        name: "Tropa de Elite",
        date: "12/10/2007",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg",
        liked: false,
      },
      {
        id: 5,
        name: "Transformers",
        date: "18/07/2007",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s7PhLSxGvwd9bl9pkY7WSvHYhN.jpg",
        liked: false,
      },
      {
        id: 6,
        name: "Alien: O Oitavo Passageiro",
        date: "20/08/1979",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yH05Ft4egz5DYy4SLWYYuVMoGqC.jpg",
        liked: false,
      }
    ];
  }

  movies: Array<Movie> = this.getMoviesAPI();
  likedMovies: Array<Movie> = [];

  getMoviesByName(search: string): Array<Movie> {
    if (search != "") {
      let searchMovies: Array<Movie> = [];
      this.movies.forEach(movie => {
        if (movie.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          searchMovies.push(movie);
        }
      });

      return searchMovies;
    }
    else {
      return this.movies;
    }
  }

  getMovieByID(id: number): Movie | null {
    let returnMovie: Movie | null = null;
    this.movies.forEach(movie => {
      if (movie.id == id) {
        returnMovie = movie;
      }
    });

    return returnMovie;
  }

  updateMovie(movie: Movie): void {
    this.movies.forEach((item, index) => {
      if (movie.id == item.id) {
        this.movies[index] = movie;
      }
    });
  }
}
