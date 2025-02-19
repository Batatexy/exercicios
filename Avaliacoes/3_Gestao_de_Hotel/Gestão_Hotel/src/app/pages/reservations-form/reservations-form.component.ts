import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { Field } from '../../models/field';
import { Reservation } from '../../models/reservation';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { Room } from '../../models/room';
import { RoomsService } from '../../services/rooms.service';

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

  //Requisições de hóspedes e reservas
  guests: Array<Guest> = [];
  reservations: Array<Reservation> = [];
  rooms: Array<Room> = [];

  //Manipulação dos campos do formulário
  @ViewChild("guestId") selectName!: ElementRef;
  @ViewChild("roomType") selectRoomType!: ElementRef;
  @ViewChild("checkIn") selectCheckIn!: ElementRef;
  @ViewChild("checkOut") selectCheckOut!: ElementRef;
  @ViewChild("numberOfGuests") selectNumberOfGuests!: ElementRef;

  public getPossible(selectRoomType: ElementRef) {
    this.selectRoomType = selectRoomType;
  }

  public getPossibleNumberOfGuests() {
    let possibleNumberOfGuests: number = 0;

    if (this.selectRoomType) {
      this.rooms.forEach(room => {
        if (Number(this.selectRoomType.nativeElement.value) == Number(room.id)) {
          possibleNumberOfGuests == room.maxGuests;
          return;
        }
      });
    }

    return possibleNumberOfGuests;

  }



  constructor(
    private getReservationsService: ReservationsService, private getGuestsService: GuestsService,
    private getRoomsService: RoomsService

  ) {
    this.reservationFormGroup = new FormGroup({
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    console.clear();
    this.getGuestsService.getGuests().subscribe({
      next: (guests) => {
        this.guests = guests;
      },
      complete: () => {
        console.log(this.guests);
      }
    });

    this.getRoomsService.getReservations().subscribe({
      next: (rooms) => { this.rooms = rooms; }
    });
  }

  public validateInformation() {
    let validation: boolean = true;

    let checkInDate = new Date(String(this.checkInModel));
    let checkOutDate = new Date(String(this.checkOutModel));

    if (checkInDate < new Date()) {
      alert("A data de checkIn não deve ser anterior a data de hoje");
      validation = false;
    }
    if (checkInDate > checkOutDate) {
      alert("A data de checkOut não deve ser posterior que a de checkIn");
      validation = false;
    }

    return validation;
  }

  public submitReservation() {

    if (!this.reservationFormGroup.invalid) {

      this.getReservationsService.getReservations().subscribe({
        next: (reservations) => {
          this.reservations = reservations;
        },

        complete: () => {

          if (this.validateInformation()) {

            let newReservation: Reservation = {
              id: String(this.reservations.length + 1),
              guestId: this.selectName?.nativeElement.value,
              checkIn: this.checkInModel,
              checkOut: this.checkOutModel,
              roomType: this.selectRoomType?.nativeElement.value,
              numberOfGuests: this.selectNumberOfGuests?.nativeElement.value,
              status: "Pendente",
              remarks: "Reserva feita online",
            };

            this.getReservationsService.addReservation(newReservation).subscribe({
              complete: () => { alert("Reserva Registrada!"); },
              error: () => { alert("Erro ao Registrar Reserva"); }
            });
          }
        }
      });
    }
    else {
      alert("Erro Genérico");
    }
  }

  public generateFor(number: number): Array<number> {
    let array: Array<number> = [];

    for (let i = 1; i <= number; i++) {
      array.push(i);
    }

    return array;
  }

}
