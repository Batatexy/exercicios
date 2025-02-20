import { Component } from '@angular/core';
import { Guest } from '../../models/guest';
import { GuestsService } from '../../services/guests.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-guests',
  imports: [RouterLink],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent {
  constructor(private getGuestsService: GuestsService, private getActivatedRoute: ActivatedRoute, private getRouter: Router,
    private getReservationsService: ReservationsService

  ) { }

  guests: Array<Guest> = [];
  guest?: Guest;

  id?: number;

  ngOnInit() {
    console.clear();
    this.id = Number(this.getActivatedRoute.snapshot.paramMap.get("id"));

    if (this.id) {
      this.getGuestsService.getGuestByID(this.id).subscribe({
        next: (guest) => { this.guest = guest[0]; },

        complete: () => {
          console.log(this.guest);
        },

        error: () => { alert(`Erro ao requisitar Hóspede`); }
      });
    }
    else {
      this.getGuests();
    }
  }

  public getGuests() {
    this.getGuestsService.getGuests().subscribe({
      next: (guests) => {
        this.guests = guests;
      },

      complete: () => {
        console.log(this.guests);
      },

      error: () => { alert(`Erro ao requisitar Hóspedes`); }
    });
  }

  public deleteGuest(event: MouseEvent, guest: Guest) {
    event.stopPropagation();

    let reservationFromGuest: Reservation;

    this.getReservationsService.getReservationByGuestId(Number(guest.id)).subscribe({
      next: (reservation) => {
        reservationFromGuest = reservation[0];
      },
      complete: () => {
        if (reservationFromGuest) {
          alert(`Este Hóspede possui uma Reserva`);
        }
        else {
          //Confirmação de exclusão
          if (confirm(`Deseja excluir ${guest.name}?`) == true) {
            this.getGuestsService.deleteGuestByID(Number(guest.id)).subscribe({
              next: (guest) => { console.log(guest); },
              complete: () => {
                alert(`${guest.name} excluído com Sucesso`);

                if (this.id) this.getRouter.navigate(['/guests']);
                else this.getGuests();
              },
              error: () => { alert(`${guest.name} não foi excluído`); }
            });
          }
        }
      },
      error: () => { alert(`Erro ao requisitar Reservas do Hóspede`); }
    });
  }
}
