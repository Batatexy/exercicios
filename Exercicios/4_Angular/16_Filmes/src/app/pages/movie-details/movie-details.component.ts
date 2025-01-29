import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { TitleComponent } from '../../components/title/title.component';
import { CommonButtonComponent } from "../../components/common-button/common-button.component";
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BadgeComponent } from '../../components/badge/badge.component';

@Component({
  selector: 'app-movie-details',
  imports: [BreadCrumbComponent, WhiteCardComponent, TitleComponent, CommonButtonComponent, CommonModule, AvatarComponent, BadgeComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  movie: Movie | null;

  constructor(private route: ActivatedRoute, public GetMoviesService: MoviesService) {
    this.movie = GetMoviesService.getMovieByID(Number(this.route.snapshot.paramMap.get("id")));
  }

  ngOnInit(): void {
    if (this.movie == null) {

    }
  }
}
