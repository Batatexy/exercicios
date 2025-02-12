import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes =
  [
    {
      path: "",
      component: LayoutComponent,
      data: {
        breadCrumb: '/'
      },
      children:
        [
          {
            path: "",
            component: HomeComponent,
          },
          {
            path: "register",
            component: RegisterComponent,
          },
          {
            path: "login",
            component: LoginComponent,
          },
          {
            path: "movies",
            component: MoviesComponent,
            data: {
              breadCrumb: '/movies'
            },
          },
          {
            path: "movie/:id",
            component: MovieDetailsComponent,
            data: {
              breadCrumb: '/movie:id'
            },
          }
        ],
    }
    ,
    {
      path: "**",
      component: LayoutComponent,
      children:
        [
          {
            path: "",
            component: NotFoundComponent,
          },
        ]
    },
  ];

