import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [FormsModule, CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent
{
  //Importar os ícones de cada botão na Classe Calculadora
	@Input() buttons: Array<string> = [];

  //Errado:
  @Input() calculate !: (value: string) => void;

  //Emitir o Valor alocado no botão
  @Output() EventEmitterValue: EventEmitter<string> = new EventEmitter();
  sendValue(value: string): void {
    this.EventEmitterValue.emit(value);
  }
}
