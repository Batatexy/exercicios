import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { TitleComponent } from '../../components/title/title.component';
import { CommonRouterButtonComponent } from "../../components/common-router-button/common-router-button.component";
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BadgeComponent } from '../../components/badge/badge.component';

@Component({
  selector: 'app-movie-details',
  imports:
    [
      BreadCrumbComponent, WhiteCardComponent, TitleComponent, CommonRouterButtonComponent, CommonModule,
      AvatarComponent, BadgeComponent, RouterLink

    ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  movie: Movie | null;

  constructor(private route: ActivatedRoute, public GetMoviesService: MoviesService, private getRouter: Router) {
    this.movie = GetMoviesService.getMovieByID(Number(this.route.snapshot.paramMap.get("id")));
  }

  //Caso o ID do filme não exista, redireciona para a página de filmes
  ngOnInit(): void {
    if (this.movie == null) {
      this.getRouter.navigate(['/movies']);
    }
  }
}
