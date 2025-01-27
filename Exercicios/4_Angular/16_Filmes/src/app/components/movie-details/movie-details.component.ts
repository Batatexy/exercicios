import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchMoviesService } from '../../services/search-movies.service';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { HeaderComponent } from '../../header/header.component';
import { WhiteCardComponent } from "../white-card/white-card.component";
import { ActorCardComponent } from '../actor-card/actor-card.component';

@Component({
  selector: 'app-movie-details',
  imports: [HeaderComponent, WhiteCardComponent, ActorCardComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  
  movie: Movie | null;

  constructor(private route: ActivatedRoute, public GetMoviesService: MoviesService)
  {
    this.movie = GetMoviesService.getMovieByID(Number(this.route.snapshot.paramMap.get("id")));
  }

  ngOnInit(): void 
  {
    if (this.movie == null)
    {
      
    }
  }
}
