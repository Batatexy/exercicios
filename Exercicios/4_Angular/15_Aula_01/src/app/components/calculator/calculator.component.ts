import { Component } from '@angular/core';
import { ResultComponent } from "../result/result.component";
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-calculator',
  imports: [ResultComponent, ButtonsComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

// @Output() NomeDoEmitter: EventEmitter<Tipo> = new EventEmitter();
// this.concluir.emit(this.tarefa);

// //Colocar a classe 'concluida' se tarefa.concluida for true
// [ngClass]="{ 'concluida': tarefa.concluida }" [class]="classeEstilo"

// //colocar o botão disabled se tarefa.concluida for true
// [disabled] = "tarefa.concluida"

// @Input() executaAlgo!: () => void;

// (concluir)="marcarConcluida(&event)"

export class CalculatorComponent
{
  buttons: Array<string> =
  [
    "C", "A", "%", "/",
    "7", "8", "9", "X",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "," ,"=",
  ];

  savedNumber: string = "";
  actualNumber: string = "";
  actualSignal: string = "";

  calculate(buttonValue: string): void
  {
    //Caso seja um número
    if (Number(buttonValue) || buttonValue == "0")
    {
      if (buttonValue == "0") {if (this.actualNumber != "0") this.actualNumber += buttonValue;}
      else {if (this.actualNumber == "0") {this.actualNumber = "";} this.actualNumber += buttonValue;}
    }
    else
    {
      switch(buttonValue)
      {
        case ",":
          //Verificar se já não tem uma virgula
          this.actualNumber += buttonValue;
          break;

        case "A":
          this.actualNumber = this.actualNumber.slice(0, -1);
          break;

        case "C":
          this.savedNumber = "";
          this.actualNumber = "";
          this.actualSignal = "";
          break;

        //Operadores
        default:
          if (this.savedNumber != "")
          {
            switch(buttonValue)
            {
              case "+":
                this.savedNumber = String(parseFloat(this.savedNumber) + parseFloat(this.actualNumber))
                break;

              case "-":
                this.savedNumber = String(parseFloat(this.savedNumber) - parseFloat(this.actualNumber))
                break;

              case "X":
                this.savedNumber = String(parseFloat(this.savedNumber) * parseFloat(this.actualNumber))
                break;

              case "/":
                this.savedNumber = String(parseFloat(this.savedNumber) / parseFloat(this.actualNumber))
                break;

              case "%":

                break;

              case "=":
                break;
            }
          }
          else
          {
            this.savedNumber = this.actualNumber;
          }

          //this.actualSignal = buttonValue;
          this.actualNumber = "";
      }
    }
  }
}
