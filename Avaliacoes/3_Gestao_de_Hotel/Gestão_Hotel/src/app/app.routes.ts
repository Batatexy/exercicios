import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
export const routes: Routes =
  [
    {
      path: "",
      component: LayoutComponent,
      children:
        [
          {
            path: "",
            component: HomeComponent
          },
          {
            path: "guests",
            component: GuestsComponent
          },
          {
            path: "reservations",
            component: ReservationsComponent
          },
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

