import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService 
{
  movies: Array<Movie>= 
  [
    {
      id:0, 
      name: "Mufasa",
      date: "02/08/2023",
      image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
      liked: false,
    },
    {
      id:1, 
      name: "Sonic 3", 
      date: "25/12/2024",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg",
      liked: true,
    },
    {
      id:2, 
      name: "Mufasa",
      date: "02/08/2023",
      image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
      liked: false,
    },
    {
      id:3, 
      name: "Sonic 3", 
      date: "25/12/2024",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg",
      liked: true,
    },
    {
      id:4, 
      name: "Mufasa",
      date: "02/08/2023",
      image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
      liked: false,
    },
    {
      id:5, 
      name: "Sonic 3", 
      date: "25/12/2024",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg",
      liked: true,
    },
    {
      id:6, 
      name: "Mufasa",
      date: "02/08/2023",
      image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
      liked: false,
    },
    {
      id:7, 
      name: "Sonic 3", 
      date: "25/12/2024",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg",
      liked: true,
    },
    {
      id:8, 
      name: "Mufasa",
      date: "02/08/2023",
      image: "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
      liked: false,
    },
    {
      id:9, 
      name: "Sonic 3", 
      date: "25/12/2024",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8HzA55GCjRTEC2YhPGna8Lc8qHo.jpg",
      liked: true,
    },
  ];

  constructor() {  }

  setMovies(newMoviesList: Array<Movie>): void {
    this.movies = newMoviesList;
  }

  addMovie(newMovie: Movie): void {
    this.movies.push(newMovie);
  }

  getMovies(): Array<Movie> {
    return this.movies;
  }

  updateMovie(movie: Movie): void
  {
    this.movies.forEach((item, index) => 
    {
      if (movie.id == item.id)
      {
        this.movies[index] = movie;
      }
    });
  }


}
