import { Component } from '@angular/core';
import { SearchAreaComponent } from '../../components/search-area/search-area.component';
import { HeaderComponent } from '../../components/header/header.component';
import { WhiteCardComponent } from '../../components/white-card/white-card.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { TranslatePipe } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MoviesService } from '../../services/movies.service';
import { ConfigurationsService } from '../../services/configurations.service';
import { Movie } from '../../models/movie';
import { CommonActionButtonComponent } from "../../components/common-action-button/common-action-button.component";
import { CommonRouterButtonComponent } from '../../components/common-router-button/common-router-button.component';

@Component({
  selector: 'app-home',
  imports: [
    WhiteCardComponent,
    MovieCardComponent, TranslatePipe,
    CommonActionButtonComponent, CommonRouterButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private getUserService: UserService, private getMoviesService: MoviesService, private getConfigurationsService: ConfigurationsService) { }



  ngOnInit() {
    this.getUserService.getUser$(1).subscribe({
      next: (user) => {
        console.log("Usuario ai:", user);

        this.getUserService.setActualUser(user[0]);
      }
    });

    this.getConfigurationsService.selectedLanguage$.subscribe({
      next: (language) => {
        this.generateFavoriteMoviesList();
      }
    });
  }



  ngAfterViewInit() {
    this.generateFavoriteMoviesList();

    console.log("User:", this.getUserService.getActualUser());
    console.log("Favorites Movies:", this.getUserService.getFavoritesMovies());
  }



  public generateFavoriteMoviesList() {
    this.getUserService.setFavoritesMovies([]);

    this.getUserService.getActualUser()?.favorites.forEach(movie => {
      this.getMoviesService.getMovieById(movie, this.getConfigurationsService.getSelectedLanguage()).subscribe
        ({
          next: (movie) => {
            this.getUserService.addFavoritesMovies(movie);
          }
        });
    });
  }



  public getFavoritesMovies(): Array<Movie> {
    return this.getUserService.getFavoritesMovies();
  }

}
