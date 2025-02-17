import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GuestComponent } from './pages/guest/guest.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LayoutComponent } from './pages/layout/layout.component';

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
                        path: "guest",
                        component: GuestComponent,
                    },
                    {
                        path: "reservation",
                        component: ReservationComponent,
                    }
                ],
        }


    ];
