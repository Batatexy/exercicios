import { Component, SimpleChange } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { FormsModule } from '@angular/forms';
import { Calculation } from '../../models/calculation';

@Component({
  selector: 'app-calculator',
  imports: [ButtonsComponent, FormsModule],
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
  //Hooks de ciclo de vida / lifecycle hook
  classeEstilo: string;

  //Injetar dependencias
  constructor()
  {
    this.classeEstilo = "";
  }

  //Verifica mudanças em inputs em tempo real, exemplo: digitar na amazon já vai aparecendo produtos
  // ngOnChanges(changes: SimpleChanges)
  // {
  //   if(changes["mensagem"])
  //   {

  //   }
  // }

  //Será executado antes de tudo, antes do renderizamento em tela
  ngOnInit()
  {
    if(this.classeEstilo == "btn")
    {

    }
    else
    {

    }
  }

  //Executa depois do ngInit, mas antes do renderizamento em tela
  //Exemplo: Depois de carregar os dados da API em ngOnInit, aqui a gente trata os dados
  ngAfterContentInit()
  {
    //Timeout
  }

  //Executa depois da renderização da tela, pra não mostrar eles carregando
  ngAfterViewInit()
  {

  }

  //Deixou de ser renderizado em tela
  ngOnDestroy()
  {

  }








  buttons: Array<string> =
  [
    "C", "A", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "0", "," ,"=",
  ];

  savedSignal: string = "";

  savedNumber: string = "";
  actualNumber: string = "";

  arrayHistory: Array<Calculation> = [];

  setSavedSignal(savedSignal: string): void
  {
    localStorage.setItem("savedSignal", JSON.stringify(savedSignal))
  }

  // getSavedSignal(): string
  // {
  //     return JSON.parse(localStorage.getItem("savedSignal")) || "";
  // }

  //Processar o clique do botão, de forma respectiva à sua função
  processButton(buttonValue: string): void
  {
    document.getElementById("input-calculator")?.focus;

    //Caso o campo esteja com um numero ou ""
    if (parseFloat(this.actualNumber.replace(",",".")) || this.actualNumber == "" || this.actualNumber == "0" || this.actualNumber == "0,")
    {
      //Caso seja um número
      if (Number(buttonValue) || buttonValue == "0")
      {
        //Verificar se o número é 0
        if (buttonValue == "0")
        {
          //Caso seja, verificar se já não há um 0 no campo, para impedir de ficar somando varias vezes
          if (this.actualNumber != "0") this.actualNumber += buttonValue;
        }
        else
        {
          //Caso já haja um zero no campo, o remove
          if (this.actualNumber == "0")
          {
            this.actualNumber = "";
          }
          //Adiciona o número clicado
          this.actualNumber += buttonValue;
        }
      }
      //Qualquer outro carácter
      else
      {
        switch(buttonValue)
        {
          case ",":
            //Verificar se já não tem uma virgula e se existe um numero digitado
            if (!this.actualNumber.includes(","))
            {
              //Se não tiver nada no campo, adiciona um zero
              if (this.actualNumber == "")
              {
                this.actualNumber += 0;
              }

              //Adicionar a virgula
              this.actualNumber += buttonValue;
            }
            break;

          //Apagar um digito
          case "A":
            this.actualNumber = this.actualNumber.slice(0, -1);
            break;

          //Resetar os valores
          case "C":
            this.savedNumber = "";
            this.actualNumber = "";
            this.savedSignal = "";
            break;

          //Operadores
          default:
            //Verificar se existe um número no campo
            if (this.actualNumber != "")
            {
              //Verificar se existe um número que foi anteriormente digitado
              if (this.savedNumber != "")
              {
                  //Caso aperte o "=", pega o sinal salvo e o passa para os calculos
                  if (buttonValue == "=")
                  {
                    this.calculate(this.savedSignal);
                  }
                  //Caso apenas aperte um dos botoes, o envia para os calculos
                  else
                  {
                    this.calculate(buttonValue);
                  }
              }
              //Caso não, apenas salva o novo número no "Numero salvo"
              else
              {
                this.savedNumber = this.actualNumber;
              }
            }

            //Salvar o sinal para futuras contas, menos o "="
            if (buttonValue != "=")
            {
              this.savedSignal = buttonValue;
            }

            //Resetar o campo
            this.actualNumber = "";
        }
      }
    }
  }

  calculate(buttonValue: string): void
  {
    //Trocar as virgulas por pontos, já que parseFloat não aceita virgulas
    this.savedNumber = this.savedNumber.replace(",", ".")
    this.actualNumber = this.actualNumber.replace(",", ".")

    //Verificar qual operação foi escolhida e executar seu calculo
    let result: number = 0;
    switch(buttonValue)
    {
      case "+":
        result = parseFloat(this.savedNumber) + parseFloat(this.actualNumber)
        break;

      case "−":
        result = parseFloat(this.savedNumber) - parseFloat(this.actualNumber)
        break;

      case "×":
        result = parseFloat(this.savedNumber) * parseFloat(this.actualNumber)
        break;

      case "÷":
        result = parseFloat(this.savedNumber) / parseFloat(this.actualNumber)
        break;

      case "%":
        result = (parseFloat(this.savedNumber) / 100) * parseFloat(this.actualNumber)
        break;

      default:
        console.log("?");
    }

    //Voltar as virgulas para exibir na tela
    this.savedNumber = this.savedNumber.replace(".", ",");
    this.actualNumber = this.actualNumber.replace(".", ",");
    let resultString: string = result.toString().replace(".", ",");

    let newCalculation = {numberOne: this.savedNumber, signal: buttonValue, numberTwo: this.actualNumber, result: resultString}

    //Criar um bloco para marcar o histórico de contas
    let history = document.createElement("p");
    history.textContent = newCalculation.numberOne + newCalculation.signal + newCalculation.numberTwo + "=" + newCalculation.result;
    document.querySelector(".history")?.appendChild(history);

    //Então alterar o valor antigo do numero salvo para este novo resultado
    //Se for dinamico, fazer pegar do resultado do ultimo objeto adicionado
    this.savedNumber = resultString;

    this.arrayHistory.push(newCalculation);
    console.log(this.arrayHistory);
  }
}
