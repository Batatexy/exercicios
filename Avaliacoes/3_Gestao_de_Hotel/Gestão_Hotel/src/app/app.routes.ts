import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GuestsFormComponent } from './pages/guests-form/guests-form.component';
import { ReservationsFormComponent } from './pages/reservations-form/reservations-form.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { GuestsComponent } from './pages/guests/guests.component';
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
            path: "guests/:id",
            component: GuestsComponent
          },
          {
            path: "guestsForm",
            component: GuestsFormComponent
          },
          {
            path: "guestsForm/:id",
            component: GuestsFormComponent
          },

          {
            path: "reservations",
            component: ReservationsComponent
          },
          {
            path: "reservations/:id",
            component: ReservationsComponent
          },
          {
            path: "reservationsForm",
            component: ReservationsFormComponent
          },
          {
            path: "reservationsForm/:id",
            component: ReservationsFormComponent
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

