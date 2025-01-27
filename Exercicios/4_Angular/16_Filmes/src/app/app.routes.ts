import { Routes } from '@angular/router';
import { DesignComponent } from './components/design/design.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
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
  
