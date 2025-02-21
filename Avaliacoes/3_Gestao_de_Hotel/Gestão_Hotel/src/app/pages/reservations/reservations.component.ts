import { Component } from '@angular/core';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { Reservation } from '../../models/reservation';
import { ReservationsService } from '../../services/reservations.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxMaskPipe } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoomsService } from '../../services/rooms.service';
import { Room } from '../../models/room';

@Component({
  selector: 'app-reservations',
  imports: [CommonModule, RouterLink, NgxMaskPipe, FormsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  constructor(
    private getGuestsService: GuestsService, private getReservationsService: ReservationsService,
    private getActivatedRoute: ActivatedRoute, private getRouter: Router, private getRoomsService: RoomsService
  ) { }

  //Hóspedes com reservas
  guestsReservations: Array<Guest> = [];

  //Arrays de Hóspedes e Reservas
  guests: Array<Guest> = [];
  reservations: Array<Reservation> = [];
  rooms: Array<Room> = [];

  //Um Hóspede e uma Reserva especifica
  guest?: Guest;
  reservation?: Reservation;

  //Array de reservações customizado
  customReservations: Array<Reservation> = [];
  customGuestsReservations: Array<Guest> = [];
  searchModel: string = "";
  searchOptions: number = 0;
  searchType: string = "text";

  //Id Passado pela URL
  id?: string;

  ngOnInit() {
    console.clear();
    this.id = String(this.getActivatedRoute.snapshot.paramMap.get("id"));

    this.search$.subscribe({
      next: () => { this.getReservations(); }
    });

    this.searchOptions$.subscribe({
      next: () => { this.getReservations(); }
    });

    this.getRoomsService.getRooms().subscribe({
      next: (rooms) => { this.rooms = rooms; }
    });

    //Detalhes de uma reserva especifica
    if (this.id != "null") {
      //Buscar a Reserva a partir do ID passado pelo URL
      this.getReservationsService.getReservationByID(this.id).subscribe({
        next: (reservation) => {
          this.reservation = reservation[0];
        },

        complete: () => {
          //Ao Completar, também buscar o Guest, mas a partir de guestID
          this.getGuestsService.getGuestByID(String(this.reservation?.guestId)).subscribe({
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

            this.customReservations = [];
            this.guestsReservations = [];

            //Filtrar por somente hóspedes com reservas e salvar em um array separado
            this.reservations.forEach(reservation => {
              this.guests.forEach(guest => {
                if (Number(reservation.guestId) == Number(guest.id)) {

                  switch (this.searchOptions) {
                    case 0: {
                      if (this.searchType != "text") {
                        this.searchModel = "";
                      }

                      this.searchType = "text";
                      if (guest.name.toLowerCase().includes(this.searchModel.toLowerCase())) {
                        this.customReservations.push(reservation);
                        this.guestsReservations.push(guest);
                      }
                      break;
                    }

                    case 1: {
                      if (this.searchType != "date") {
                        this.searchModel = "";
                      }
                      this.searchType = "date";

                      if (reservation.checkIn.toLowerCase().includes(this.searchModel.toLowerCase())) {
                        this.customReservations.push(reservation);
                        this.guestsReservations.push(guest);
                      }
                      break;
                    }

                    case 2: {
                      if (this.searchType != "date") {
                        this.searchModel = "";
                      }
                      this.searchType = "date";

                      if (reservation.checkOut.toLowerCase().includes(this.searchModel.toLowerCase())) {
                        this.customReservations.push(reservation);
                        this.guestsReservations.push(guest);
                      }
                      break;
                    }

                    case 3: {
                      if (this.searchType != "text") {
                        this.searchModel = "";
                      }
                      this.searchType = "text";

                      this.rooms.forEach(room => {
                        if (room.id == reservation.roomType && room.name.toLowerCase().includes(this.searchModel.toLowerCase())) {
                          this.customReservations.push(reservation);
                          this.guestsReservations.push(guest);
                        }
                      });

                      break;
                    }

                    case 4: {
                      if (this.searchType != "number") {
                        this.searchModel = "";
                      }
                      this.searchType = "number";

                      if (reservation.numberOfGuests == Number(this.searchModel) || this.searchModel == "") {
                        this.customReservations.push(reservation);
                        this.guestsReservations.push(guest);
                      }
                      break;
                    }

                    case 5: {
                      if (this.searchType != "text") {
                        this.searchModel = "";
                      }
                      this.searchType = "text";

                      if (reservation.status.toLowerCase().includes(this.searchModel.toLowerCase())) {
                        this.customReservations.push(reservation);
                        this.guestsReservations.push(guest);
                      }
                      break;
                    }
                  }
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

    if (reservation.status == "Excluído") {
      alert(`Reserva já excluída`);
    }
    else {
      //Confirmação de exclusão
      if (confirm(`Deseja excluir ${reservation.id}?`) == true) {

        reservation.status = "Excluído";
        this.getReservationsService.editReservation(reservation).subscribe({
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




  public search$ = new Observable<string>((observer) => {
    let lastSearch = this.searchModel;
    setInterval(() => {
      if (lastSearch != this.searchModel) {
        observer.next(this.searchModel);
        lastSearch = this.searchModel;
      }

    },);
  });

  public searchOptions$ = new Observable<number>((observer) => {
    let lastSearchOptions = this.searchOptions;
    setInterval(() => {
      if (lastSearchOptions != this.searchOptions) {
        observer.next(this.searchOptions);
        lastSearchOptions = this.searchOptions;
      }

    },);
  });
}
