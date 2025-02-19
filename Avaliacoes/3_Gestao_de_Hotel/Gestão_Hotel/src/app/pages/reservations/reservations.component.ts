import { Component } from '@angular/core';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { Reservation } from '../../models/reservation';
import { ReservationsService } from '../../services/reservations.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservations',
  imports: [CommonModule, RouterLink],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  constructor(
    private getGuestsService: GuestsService, private getReservationsService: ReservationsService,
    private getActivatedRoute: ActivatedRoute
  ) { }

  //Hóspedes com reservações
  guestsReservations: Array<Guest> = [];

  guests: Array<Guest> = [];
  reservations: Array<Reservation> = [];

  guest?: Guest;
  reservation?: Reservation;

  id?: number;

  ngOnInit() {
    console.clear();
    this.id = Number(this.getActivatedRoute.snapshot.paramMap.get("id"));

    //Detalhes de uma reserva especifica
    if (this.id) {
      this.getReservationsService.getReservationByID(this.id).subscribe({
        next: (reservation) => {
          this.reservation = reservation[0];
        },

        complete: () => {

          this.getGuestsService.getGuestByID(Number(this.reservation?.guestId)).subscribe({
            next: (guest) => {
              this.guest = guest[0];
            }
          });
        }
      });
    }
    //Todas as Reservas
    else {
      this.getReservationsService.getReservations().subscribe({
        next: (reservations) => {
          this.reservations = reservations;
        },

        complete: () => {
          console.log(this.reservations);

          this.getGuestsService.getGuests().subscribe({
            next: (guests) => {
              this.guests = guests;
            },
            complete: () => {
              this.reservations.forEach(reservation => {
                this.guests.forEach(guest => {
                  if (Number(reservation.guestId) == Number(guest.id)) {
                    this.guestsReservations.push(guest);
                  }
                });
              });

              console.log(this.guestsReservations);
            }
          });
        }
      });
    }


  }




}
