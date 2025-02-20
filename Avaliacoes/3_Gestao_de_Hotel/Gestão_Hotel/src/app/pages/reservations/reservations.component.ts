import { Component } from '@angular/core';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { Reservation } from '../../models/reservation';
import { ReservationsService } from '../../services/reservations.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservations',
  imports: [CommonModule, RouterLink],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  constructor(
    private getGuestsService: GuestsService, private getReservationsService: ReservationsService,
    private getActivatedRoute: ActivatedRoute, private getRouter: Router
  ) { }

  //Hóspedes com reservas
  guestsReservations: Array<Guest> = [];

  //Arrays de Hóspedes e Reservas
  guests: Array<Guest> = [];
  reservations: Array<Reservation> = [];

  //Um Hóspede e uma Reserva especifica
  guest?: Guest;
  reservation?: Reservation;

  //Id Passado pela URL
  id?: number;

  ngOnInit() {
    console.clear();
    this.id = Number(this.getActivatedRoute.snapshot.paramMap.get("id"));

    //Detalhes de uma reserva especifica
    if (this.id) {
      //Buscar a Reserva a partir do ID passado pelo URL
      this.getReservationsService.getReservationByID(this.id).subscribe({
        next: (reservation) => {
          this.reservation = reservation[0];
        },

        complete: () => {
          //Ao Completar, também buscar o Guest, mas a partir de guestID
          this.getGuestsService.getGuestByID(Number(this.reservation?.guestId)).subscribe({
            next: (guest) => {
              this.guest = guest[0];
            }
          });
        },

        error: () => { alert(`Erro ao requisitar Reserva`); }
      });
    }
    //Todas as Reservas
    else {
      this.getReservations();
    }
  }

  public getReservations() {
    //Buscar todas as reservas
    this.getReservationsService.getReservations().subscribe({
      next: (reservations) => {
        this.reservations = reservations;
      },

      complete: () => {
        console.log(this.reservations);

        //Buscar todos os Hóspedes
        this.getGuestsService.getGuests().subscribe({
          next: (guests) => {
            this.guests = guests;
          },
          complete: () => {
            //Filtrar por somente hóspedes com reservas e salvar em um array separado
            this.reservations.forEach(reservation => {
              this.guests.forEach(guest => {
                if (Number(reservation.guestId) == Number(guest.id)) {
                  this.guestsReservations.push(guest);
                }
              });
            });

            console.log(this.guestsReservations);
          },

          error: () => { alert(`Erro ao requisitar Hóspedes`); }
        });
      }
    });
  }

  public deleteReservation(event: MouseEvent, reservation: Reservation) {
    event.stopPropagation();

    //Confirmação de exclusão
    if (confirm(`Deseja excluir ${reservation.id}?`) == true) {
      this.getReservationsService.deleteReservationByID(Number(reservation.id)).subscribe({
        next: (reservation) => { console.log(reservation); },
        complete: () => {
          alert(`Reserva excluída com Sucesso`);

          if (this.id) this.getRouter.navigate(['/reservations']);
          else this.getReservations();
        },
        error: () => { alert(`A Reserva não foi excluída`); }
      });
    }
  }
}
