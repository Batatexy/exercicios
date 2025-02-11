import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ConfigurationsService } from '../../services/configurations.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //Registro de Usuário
  newRegister: FormGroup;
  newRegisterInvalid: boolean = false;

  emailModel: string = '';
  nameModel: string = '';


  constructor(private getUserService: UserService, private getConfigurationsService: ConfigurationsService,) {

    this.newRegister = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email])
    });
  }

  ngOnInit() {
    //Validação dos campos de Register
    this.newRegister.get('name')?.valueChanges.subscribe({
      next: (val) => {
        if (this.newRegister.get('name')?.errors) {
          this.newRegisterInvalid = true;
        } else {
          this.newRegisterInvalid = false;
        }
      },
    });
  }

  submitRegister() {
    if (!this.newRegister.invalid) {
      let newUser = this.newRegister.value;

      this.getUserService.sendUser({ id: 2, name: newUser['name'], email: newUser['email'] }).subscribe({
        next: (val) => console.log(val)
      });
    }

  }















}
