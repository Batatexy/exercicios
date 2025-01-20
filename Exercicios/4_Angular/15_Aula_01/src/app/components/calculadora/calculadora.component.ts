import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent
{
  buttons: string[] =
  [
    "C", "A",
    "7", "8", "9", "/",
    "4", "5", "6", "X",
    "1", "2", "3", "-",
    "0", "+",
  ];

  savedNumber: string = "";
  actualNumber: string = "";
  actualSignal: string = "";

    calculate(buttonValue: string)
    {
        if (buttonValue == "+" || buttonValue == "-" || buttonValue == "X" || buttonValue == "/")
        {
            this.chooseOperation(buttonValue);
        }
        else if (buttonValue == "C")
        {
            this.savedNumber = "";
            this.actualNumber = "";
            this.actualSignal = "";
        }
        else if (buttonValue == "A")
        {
            this.actualNumber = this.actualNumber.slice(0, -1);
        }
        //Numeros
        else
        {
            if (buttonValue == "0")
            {
                if (this.actualNumber != "0")
                {
                    this.actualNumber += buttonValue;
                }
            }
            else
            {
                if (this.actualNumber == "0")
                {
                    this.actualNumber = "";
                }

                this.actualNumber += buttonValue;
            }
        }
    }

    chooseOperation(buttonValue: string)
    {

        if (this.actualSignal != "")
        {
            if (this.actualNumber != "" && this.actualNumber != "0")
            {


            }



                let add: number = 0;

                switch(this.actualSignal)
                {
                    case "+":
                        add = parseInt(this.savedNumber) + parseInt(this.actualNumber)
                        break;

                    case "-":
                        add = parseInt(this.savedNumber) - parseInt(this.actualNumber)
                        break;

                    case "X":
                        add = parseInt(this.savedNumber) * parseInt(this.actualNumber)
                        break;

                    case "/":
                        add = parseInt(this.savedNumber) / parseInt(this.actualNumber)
                        break;
                }
                this.savedNumber = String(add);
            }
            else
            {
                this.savedNumber = this.actualNumber;
            }

            this.actualSignal = buttonValue;
            this.actualNumber = "";

        }
}
