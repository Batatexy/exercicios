import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { DesignComponent } from './pages/design/design.component';
export const routes: Routes =
  [
    {
      path: "",
      component: DesignComponent,
      children:
        [
          {
            path: "",
            component: MoviesComponent,
          },
          {
            path: "movie/:id",
            component: MovieDetailsComponent,
          },
        ],
    }
    ,
    {
      path: "**",
      component: DesignComponent,
      children:
        [
          {
            path: "",
            component: NotFoundComponent,
          },
        ]
    },
  ];

