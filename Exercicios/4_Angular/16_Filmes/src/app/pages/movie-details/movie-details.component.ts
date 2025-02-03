import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';
import { WhiteCardComponent } from "../../components/white-card/white-card.component";
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { CommonActionButtonComponent } from "../../components/common-action-button/common-action-button.component";
import { CastsService } from '../../services/casts.service';
import { Cast } from '../../models/cast';

@Component({
  selector: 'app-movie-details',
  imports: [
    BreadCrumbComponent, WhiteCardComponent, TitleComponent, CommonModule,
    AvatarComponent, BadgeComponent, 
    CommonActionButtonComponent
],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  movie?: Movie | null;
  cast?: Cast | null;
  

  constructor(private route: ActivatedRoute, private getMoviesService: MoviesService, private getCastsService: CastsService ,private getRouter: Router) {}

  //Caso o ID do filme não exista, redireciona para a página de filmes
  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get("id"))
    this.movie = this.getMoviesService.getMovieByID(id);
    this.cast = this.getCastsService.getCastById(id)

    if (this.movie == null) {
      this.getRouter.navigate(['/movies']);
    }
  }
}
