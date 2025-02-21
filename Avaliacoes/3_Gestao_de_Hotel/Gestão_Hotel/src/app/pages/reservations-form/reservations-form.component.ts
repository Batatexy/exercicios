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
import { Observable } from 'rxjs';
import { NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-reservations-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskPipe],
  templateUrl: './reservations-form.component.html',
  styleUrl: './reservations-form.component.scss'
})
export class ReservationsFormComponent {

  //Mesma página, mas se houver ID, muda as informações
  id?: string;

  //Formulário
  reservationFormGroup: FormGroup;
  checkInModel: string = "";
  checkOutModel: string = "";
  remarksModel: string = "";
  guestIdModel: string = "";
  roomTypeModel: string = "0";
  numberOfGuestsModel: string = "1";
  statusModel: string = "";

  //Requisições de hóspedes, reservas e quartos
  guests: Array<Guest> = [];
  guest?: Guest;
  reservations: Array<Reservation> = [];
  reservation?: Reservation;

  rooms: Array<Room> = [];
  roomsAvailable: Array<Room> = [];
  roomsCont: Array<number> = [0, 0, 0];

  constructor(
    private getReservationsService: ReservationsService, private getGuestsService: GuestsService,
    private getRoomsService: RoomsService, private getActivatedRoute: ActivatedRoute, private getRouter: Router
  ) {
    this.reservationFormGroup = new FormGroup({
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      remarks: new FormControl('', [Validators.minLength(3), Validators.maxLength(100)]),
      guestId: new FormControl('', [Validators.required]),
      roomType: new FormControl('', [Validators.required]),
      numberOfGuests: new FormControl('', [Validators.required]),
    });
  }



  ngOnInit() {
    console.clear();
    this.id = String(this.getActivatedRoute.snapshot.paramMap.get("id"));

    //Verificação para não color uma opção de Quantidade de Hóspedes no Quarto errado
    this.roomType$.subscribe({
      next: () => {
        this.rooms.forEach((room) => {
          if (Number(this.numberOfGuestsModel) > room.maxGuests && Number(this.roomTypeModel) == room.id) {
            this.numberOfGuestsModel = String(room.maxGuests);
          }
        });
      }
    });

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
            this.getRoomsAvailable();

            //Editar uma Reserva
            if (this.id && this.id != "null") {
              //Requisitar  uma reserva especifica
              this.getReservationsService.getReservationByID(this.id).subscribe({
                next: (reservation) => { this.reservation = reservation[0]; },
                complete: () => {
                  //Pegar valores da requisição e colocar nos campos
                  this.roomTypeModel = String(this.reservation?.roomType);
                  this.numberOfGuestsModel = String(this.reservation?.numberOfGuests);
                  this.checkInModel = String(this.reservation?.checkIn);
                  this.checkOutModel = String(this.reservation?.checkOut);
                  this.remarksModel = String(this.reservation?.remarks);
                  this.statusModel = String(this.reservation?.status);

                  //Requisitar Hóspede especifico
                  this.getGuestsService.getGuestByID(String(this.reservation?.guestId)).subscribe({
                    next: (guest) => { this.guest = guest[0]; },
                    complete: () => {
                      //Pegar o valor e deixar selecionado o Hóspede
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
              //Colocar o Primeiro Hóspede
              this.guestIdModel = String(this.guests[0].id);
              this.numberOfGuestsModel = "1";
            }
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

    //Data de CheckIn Não passar de CheckOut
    if (checkInDate > checkOutDate) {
      alert("A data de checkOut não deve ser posterior que a de checkIn");
      validation = false;
    }

    //Não passar o número de Hóspedes por quarto
    this.rooms.forEach(room => {
      if (room.id == Number(this.roomTypeModel)) {
        if (Number(this.numberOfGuestsModel) > room.maxGuests) {
          validation = false;
          alert("O número de Hóspedes ultrapassa o tamanho máximo para o quarto");
        }
      }
    });

    return validation;
  }

  public verifyDeletedReservations() {
    let notDeletedReservations: Array<Reservation> = [];

    this.reservations.forEach(reservation => {
      if (reservation.status != "Excluído") {
        notDeletedReservations.push(reservation);
      }
    });

    this.reservations = notDeletedReservations;
  }

  public submitReservation() {
    //Validação de campos obrigatórios
    if (!this.reservationFormGroup.invalid) {
      //Validação de informações, como verificação de datas e possíveis erros que poderiam passar
      if (this.validateInformation()) {
        //Nova Reserva
        let newReservation: Reservation = {
          guestId: Number(this.guestIdModel),
          checkIn: this.checkInModel,
          checkOut: this.checkOutModel,
          roomType: Number(this.roomTypeModel),
          numberOfGuests: Number(this.numberOfGuestsModel),
          status: "Pendente",
          remarks: this.remarksModel,
        };

        //Editar uma Reserva
        if (this.reservation) {
          //Alterar o ID = "" para o que a reserva possuí
          newReservation.id = this.reservation.id;
          //Editar no BD as informações
          this.getReservationsService.editReservation(newReservation).subscribe({
            complete: () => {
              alert("Reserva Editada");
              this.getRouter.navigate(['/reservations']);
            },
            error: () => { alert("Erro ao editar Hóspede"); }
          });
        }
        //Nova Reserva
        else {
          //Requisitar Reservas
          this.getReservationsService.getReservations().subscribe({
            next: (reservations) => { this.reservations = reservations; },
            complete: () => {
              this.getReservationsService.addReservation(newReservation).subscribe({
                complete: () => {
                  alert("Reserva Registrada");

                  //Resetar Campos
                  this.checkInModel = "";
                  this.checkOutModel = "";
                  this.remarksModel = "";
                  this.numberOfGuestsModel = "1";

                  this.getRoomsAvailable();

                  //Requisitar Hóspedes para atualizar as informações
                  this.getGuestsService.getGuests().subscribe({
                    next: (guests) => { this.guests = guests; },
                    complete: () => {
                      this.guestIdModel = String(this.guests[0].id);
                    }
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
    //Requisitar Reservas para atualizar as informações
    this.getReservationsService.getReservations().subscribe({
      next: (reservations) => { this.reservations = reservations; },
      complete: () => {
        this.verifyDeletedReservations();

        //Resetar para verificar as quantidades de quartos
        this.roomsAvailable = [];
        this.roomsCont = [0, 0, 0];

        //Contar quantos quartos estão ocupados
        this.reservations.forEach(reservation => {
          this.roomsCont[Number(reservation.roomType)]++;
        });

        //Salvar informações de quartos livres em um array personalizado
        this.rooms.forEach((room, index) => {
          if (this.roomsCont[index] < room.amount) {
            this.roomsAvailable.push(room);
          }
        });

        //Caso não haja mais quartos, automaticamente redireciona para as Reservas
        if (this.roomsAvailable.length == 0 && !this.return && this.id == "null") {
          alert("Não Há mais quartos disponíveis");
          this.return = true;
          this.getRouter.navigate(['/reservations']);
        }

        this.roomTypeModel = String(this.roomsAvailable[0].id);
      }
    });
  }

  public generateNumberOfGuestsFor(id: string): Array<number> {
    let array: Array<number> = [];
    let number: number = 0;

    this.roomsAvailable.forEach(room => {
      if (room.id == Number(id)) {
        number = room.maxGuests;
      }
    });

    for (let i = 1; i <= number; i++) {
      array.push(i);
    }

    return array;
  }

  public roomType$ = new Observable<string>((observer) => {
    setInterval(() => {
      observer.next(this.roomTypeModel);
    },);
  });
}
