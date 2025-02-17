import { Component } from '@angular/core';
import { WhiteCardComponent } from '../../components/white-card/white-card.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { TranslatePipe } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { MoviesService } from '../../services/movies.service';
import { ConfigurationsService } from '../../services/configurations.service';
import { Movie } from '../../models/movie';
import { CommonRouterButtonComponent } from '../../components/common-router-button/common-router-button.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  imports: [
    WhiteCardComponent,
    MovieCardComponent, TranslatePipe,
    CommonRouterButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  movieSlice: number = 5;

  constructor(private getUserService: UserService, private getMoviesService: MoviesService, private getConfigurationsService: ConfigurationsService) { }

  ngOnInit() {
    this.getConfigurationsService.selectedLanguage$.subscribe({
      next: (language) => {
        this.getUserService.generateFavoriteMoviesList();
      }
    });
  }

  ngAfterViewInit() {
    this.getUserService.generateFavoriteMoviesList();
    console.log("User:", this.getUserService.getUser());
    console.log("Favorites Movies:", this.getUserService.getFavoritesMovies());
  }


  public getFavoritesMovies(): Array<Movie> {
    return this.getUserService.getFavoritesMovies();
  }

  public getUser(): User | undefined {
    return this.getUserService.getUser();
  }
}
