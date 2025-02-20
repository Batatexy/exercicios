import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/reservation';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { Room } from '../../models/room';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reservations-form.component.html',
  styleUrl: './reservations-form.component.scss'
})
export class ReservationsFormComponent {

  //Formulário
  reservationFormGroup: FormGroup;
  checkInModel: string = "";
  checkOutModel: string = "";
  remarksModel: string = "";

  guestIdModel: string = "";
  roomTypeModel: string = "0";
  numberOfGuestsModel: string = "1";

  //Requisições de hóspedes e reservas
  guests: Array<Guest> = [];
  guest?: Guest;

  reservations: Array<Reservation> = [];
  reservation?: Reservation;

  rooms: Array<Room> = [];
  roomsAvailable: Array<Room> = [];

  constructor(
    private getReservationsService: ReservationsService, private getGuestsService: GuestsService,
    private getRoomsService: RoomsService, private getActivatedRoute: ActivatedRoute, private getRouter: Router

  ) {
    this.reservationFormGroup = new FormGroup({
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      remarks: new FormControl('', [Validators.required]),

      guestId: new FormControl('', [Validators.required]),
      roomType: new FormControl('', [Validators.required]),
      numberOfGuests: new FormControl('', [Validators.required]),
    });
  }

  id?: number;


  ngOnInit() {
    console.clear();
    this.id = Number(this.getActivatedRoute.snapshot.paramMap.get("id"));

    //Requisitar Hóspedes
    this.getGuestsService.getGuests().subscribe({
      next: (guests) => {
        this.guests = guests;
      },
      complete: () => {
        console.log(this.guests);

        //Requisitar Quartos
        this.getRoomsService.getRooms().subscribe({
          next: (rooms) => { this.rooms = rooms; },
          complete: () => {
            this.getReservationsService.getReservations().subscribe({
              next: (reservations) => { this.reservations = reservations; },
              complete: () => {
                this.getRoomsAvailable();

                //Editar uma Reserva
                if (this.id) {
                  //Requisitar  uma reserva especifica
                  this.getReservationsService.getReservationByID(this.id).subscribe({
                    next: (reservation) => { this.reservation = reservation[0]; },
                    complete: () => {
                      //Alterar valores dos campos
                      this.roomTypeModel = String(this.reservation?.roomType);
                      this.numberOfGuestsModel = String(this.reservation?.numberOfGuests);
                      this.checkInModel = String(this.reservation?.checkIn);
                      this.checkOutModel = String(this.reservation?.checkOut);
                      this.remarksModel = String(this.reservation?.remarks);

                      //Requisitar Hóspede especifico
                      this.getGuestsService.getGuestByID(Number(this.reservation?.guestId)).subscribe({
                        next: (guest) => { this.guest = guest[0]; },
                        complete: () => {
                          //Alterar valores dos campos
                          this.guestIdModel = (String(this.guest?.id));
                        },
                        error: () => { alert("Erro ao requisitar Hóspede"); }
                      });
                    },
                    error: () => { alert("Erro ao requisitar Reserva"); }
                  });
                }
                //Registrar uma nova Reserva
                else {
                  this.guestIdModel = this.guests[0].id;
                  //this.numberOfGuestsModel = "1";
                }
              }
            });



          },
          error: () => { alert("Erro ao requisitar Quartos"); }
        });
      },
      error: () => { alert("Erro ao requisitar Hóspedes"); }
    });
  }

  public validateInformation() {
    let validation: boolean = true;

    let checkInDate = new Date(this.checkInModel);
    let checkOutDate = new Date(this.checkOutModel);

    if (checkInDate < new Date()) {
      alert("A data de checkIn não deve ser anterior a data de hoje");
      validation = false;
    }
    if (checkInDate > checkOutDate) {
      alert("A data de checkOut não deve ser posterior que a de checkIn");
      validation = false;
    }

    //Não passar o número de Hóspedes por quarto
    this.rooms.forEach(room => {
      if (room.id = this.roomTypeModel) {
        if (Number(this.numberOfGuestsModel) > room.maxGuests) {
          validation = false;
          alert("O número de Hóspedes ultrapassa o tamanho máximo para o quarto");
          return;
        }
      }
    });



    return validation;
  }

  public submitReservation() {
    if (!this.reservationFormGroup.invalid) {
      if (this.validateInformation()) {
        let newReservation: Reservation = {
          id: "",
          guestId: this.guestIdModel,
          checkIn: this.checkInModel,
          checkOut: this.checkOutModel,
          roomType: this.roomTypeModel,
          numberOfGuests: Number(this.numberOfGuestsModel),
          status: "Pendente",
          remarks: "Reserva feita online",
        };

        if (this.reservation) {
          newReservation.id = this.reservation.id;
          this.getReservationsService.editReservation(newReservation).subscribe({
            complete: () => {
              alert("Reserva Editada");
              this.getRouter.navigate(['/reservations']);

            },
            error: () => { alert("Erro ao editar Hóspede"); }
          });
        }
        else {
          this.getReservationsService.getReservations().subscribe({
            next: (reservations) => { this.reservations = reservations; },
            complete: () => {
              newReservation.id = String(this.reservations.length + 1);
              this.getReservationsService.addReservation(newReservation).subscribe({
                complete: () => {
                  alert("Reserva Registrada");

                  this.checkInModel = "";
                  this.checkOutModel = "";
                  this.remarksModel = "";
                  this.guestIdModel = "";
                  this.roomTypeModel = "0";
                  this.numberOfGuestsModel = "1";


                  this.getReservationsService.getReservations().subscribe({
                    next: (reservations) => { this.reservations = reservations; },
                    complete: () => { this.getRoomsAvailable(); }
                  });
                },
                error: () => { alert("Erro ao Registrar Reserva"); }
              });
            }
          });
        }
      }
    }
    else {
      alert("Preencha os campos para registrar a Reserva");
    }
  }

  return: boolean = false;

  public getRoomsAvailable(): void {
    this.roomsAvailable = [];
    let roomsCont: Array<number> = [0, 0, 0];

    this.reservations.forEach(reservation => {
      roomsCont[Number(reservation.roomType)]++;
    });

    this.rooms.forEach((room, index) => {
      if (roomsCont[index] < room.amount) {
        this.roomsAvailable.push(room);
      }
    });

    console.log(this.roomsAvailable);

    if (this.roomsAvailable.length == 0 && !this.return) {
      alert("Não Há mais quartos disponíveis");
      this.return = true;
      this.getRouter.navigate(['/reservations']);
    }
  }

  public generateNumberOfGuestsFor(id: string): Array<number> {
    let array: Array<number> = [];
    let number: number = 0;

    this.roomsAvailable.forEach(room => {
      if (room.id == id) {
        number = room.maxGuests;
      }
    });

    for (let i = 1; i <= number; i++) {
      array.push(i);
    }

    return array;
  }




  // public String(number: number | undefined) {
  //   return String(number);
  // }
}
