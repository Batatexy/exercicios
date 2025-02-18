import { Component } from '@angular/core';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Field } from '../../models/field';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-guests',
  imports:
    [
      CommonModule, FormComponent
    ],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent {

  //Array para criar os campos de forma dinâmica
  form: Array<Field> =
    [
      {
        //Campo
        model: "",
        //Nome do Campo
        name: "name",
        //Tipo do Campo
        type: "text",
        //Texto acima do Campo
        label: "Digite o Nome:",
        //Texto de campo invalido abaixo do Campo
        invalid: "Digite um nome com pelo menos 3 caracteres",
      },
      {
        model: "",
        name: "email",
        type: "email",
        label: "Digite o Email:",
        invalid: "Digite um email válido",
      },
      {
        model: "",
        name: "phone",
        type: "tel",
        label: "Digite o Telefone:",
        invalid: "Digite um telefone válido",
      },
      {
        model: "",
        name: "document",
        type: "text",
        label: "Digite o CPF:",
        invalid: "Digite um CPF válido",
      },
    ];

  guestFormGroup: FormGroup;

  constructor(private getGuestsService: GuestsService) {
    this.guestFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      document: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    });
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }


  public validateInformation(guests: Array<Guest>,) {
    let validation: boolean = true;

    guests.forEach(guest => {
      //Caso já haja o mesmo email registrado
      if (validation && guest.email == this.form[1].model) {
        alert("Este email já está cadastrado");
        validation = false;
        return;
      }

      //Caso já haja o mesmo CPF registrado
      if (validation && guest.document == this.form[3].model) {
        alert("Este CPF já está cadastrado");
        validation = false;
        return;
      }
    });

    return validation;
  }



  public submitGuest() {

    if (!this.guestFormGroup.invalid) {

      this.getGuestsService.getGuests().subscribe({
        next: (guests) => {

          //Função que valida diversos campos, email ou CPF já registrado
          if (this.validateInformation(guests)) {
            let newGuest: Guest =
            {
              id: String(guests.length + 1),
              name: this.form[0].model,
              email: this.form[1].model,
              phone: this.form[2].model,
              document: this.form[3].model,
            };

            this.getGuestsService.addGuest(newGuest).subscribe({
              complete: () => { alert("Hóspede Registrado!"); },
              error: () => { alert("Erro ao Registrar Hóspede"); }
            });
          }
        }
      });


    }
  }
}