import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-result',
  imports: [FormsModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent
{
  //Importar variáveis da classe Calculadora
  @Input() actualNumber: string = "";
  @Input() savedNumber: string = "";
}
