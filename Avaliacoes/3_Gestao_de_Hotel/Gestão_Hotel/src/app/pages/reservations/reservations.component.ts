import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { Field } from '../../models/field';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-reservations',
  imports: [CommonModule, FormComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  form: Array<Field> =
    [
      {
        model: "",
        name: "guestId",
        type: "number",
        label: "Hóspede",
        invalid: "Digite um Hóspede válido",
      },
      {
        model: "",
        name: "checkIn",
        type: "date",
        label: "checkIn",
        invalid: "Digite um checkIn válido",
      },
      {
        model: "",
        name: "checkOut",
        type: "date",
        label: "checkOut",
        invalid: "Digite um checkOut válido",
      },
      {
        model: "",
        name: "roomType",
        type: "select",
        select: ["Comum", "Deluxe", "Suíte"],
        label: "Tipo de Quarto",
        invalid: "Escolha uma opção",
      },
      {
        model: "",
        name: "numberOfGuests",
        type: "number",
        label: "Número de Hóspedes",
        invalid: "Digite um número válido",
      },
    ];

  reservationFormGroup: FormGroup;

  constructor(private getReservationsService: ReservationsService) {
    this.reservationFormGroup = new FormGroup({
      guestId: new FormControl('', [Validators.required]),
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      roomType: new FormControl('', [Validators.required]),
      numberOfGuests: new FormControl('', [Validators.required]),
    });
  }

  validateInformation() {
    let validation: boolean = true;

    let checkInDate = new Date(String(this.form[1].model));
    let checkOutDate = new Date(String(this.form[2].model));

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

  submitReservation() {
    if (!this.reservationFormGroup.invalid) {

      this.getReservationsService.getReservations().subscribe({
        next: (reservations) => {

          if (this.validateInformation()) {
            let newReservation: Reservation = {
              id: String(reservations.length + 1),
              guestId: Number(this.form[0].model),
              checkIn: this.form[1].model,
              checkOut: this.form[2].model,
              roomType: this.form[3].model,
              numberOfGuests: Number(this.form[4].model),
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

  }
}
