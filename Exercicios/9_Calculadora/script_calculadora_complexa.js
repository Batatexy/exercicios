//Numero que aparece em cima
const htmlDigitandoNumero = document.querySelector(".calculadora-complexa #digitando-numero");
const htmlNumeroCalculado = document.querySelector(".calculadora-complexa #numero-calculado");

//Botões
const inputNumeros = document.querySelectorAll(".calculadora-complexa .numero");
const inputOperadores = document.querySelectorAll(".calculadora-complexa .simbolo");

//Variaveis de salvar números, operadores, virgula:
let simbolo = "";
let digitandoNumero = 0;
let numeroCalculado = 0;
let virgula = "";
let numeroAntesDaVirgula = "";

//Números
inputNumeros.forEach(function (elementos, index) 
{
    elementos.addEventListener("click", function () 
    {
        if (digitandoNumero.toString().length < 14)
        {
            digitandoNumero *= 10;
            digitandoNumero += parseInt(elementos.textContent);
            htmlDigitandoNumero.innerHTML = numeroAntesDaVirgula + virgula + digitandoNumero + simbolo;
        }
    });
});

//Operadores
inputOperadores.forEach(function (elementos, index)
{
    elementos.addEventListener("click", function () 
    {
        if (digitandoNumero != 0)
        {
            if (virgula == ",")
            {
                digitandoNumero = numeroAntesDaVirgula + (digitandoNumero/10);
            }

            if (numeroCalculado != 0)
            {
                let resultado = realizarOperacao(simbolo, digitandoNumero, numeroCalculado);
                numeroCalculado = resultado;
                htmlNumeroCalculado.innerHTML = numeroCalculado;
            }
            else
            {
                //Aplicar o numero de cima em baixo
                numeroCalculado = digitandoNumero;
                htmlNumeroCalculado.innerHTML = numeroCalculado;
            }

            simbolo = elementos.textContent;

            //Resetar o numero de cima
            digitandoNumero = 0;
            htmlDigitandoNumero.innerHTML = digitandoNumero + simbolo;

            virgula = "";
            numeroAntesDaVirgula = "";
        }
        else
        {
            simbolo = elementos.textContent;
            htmlDigitandoNumero.innerHTML = digitandoNumero + simbolo;
        }
    });
});

//Virgula
document.querySelector('.calculadora-complexa .virgula').addEventListener('click', () =>
{
    if (virgula == "")
    {
        virgula = ",";
        numeroAntesDaVirgula = digitandoNumero;
        digitandoNumero = 0;

        htmlDigitandoNumero.innerHTML = numeroAntesDaVirgula + "," + digitandoNumero + simbolo;
    }
});

//C
document.querySelector('.calculadora-complexa .ce').addEventListener('click', () =>
{
    simbolo = "";
    digitandoNumero = 0;
    numeroCalculado = 0;
    virgula = "";
    numeroAntesDaVirgula = "";
    htmlDigitandoNumero.innerHTML = 0;
    htmlNumeroCalculado.innerHTML = "";
});

//Backspace
document.querySelector('.calculadora-complexa .backspace').addEventListener('click', () =>
{
    //Resto da divisão por 10 será o ultimo digito
    let ultimoDigito = digitandoNumero % 10;
    
    //Subtrair este valor e dividir por 10
    digitandoNumero -= ultimoDigito;
    digitandoNumero /= 10;
    
    if (digitandoNumero == 0 && virgula == ",")
    {
        virgula = "";
        digitandoNumero = numeroAntesDaVirgula;
        numeroAntesDaVirgula = "";
    }

    htmlDigitandoNumero.innerHTML = numeroAntesDaVirgula + virgula + digitandoNumero + simbolo;
});

//Igual
document.querySelector('.calculadora-complexa .igual').addEventListener('click', () =>
{
    if (digitandoNumero != 0)
    {
        if (numeroCalculado != 0)
        {
            if (virgula == ",")
            {
                digitandoNumero = numeroAntesDaVirgula + (digitandoNumero/10);
            }

            if (simbolo == "")
            {
                htmlNumeroCalculado.innerHTML = digitandoNumero;
            }
            else
            {
                let resultado = realizarOperacao(simbolo, digitandoNumero, numeroCalculado);
                numeroCalculado = resultado;
                htmlNumeroCalculado.innerHTML = numeroCalculado;
            }

            virgula = "";
            numeroAntesDaVirgula = "";
        }
        else
        {
            //Aplicar o numero de cima em baixo
            numeroCalculado = digitandoNumero;
            htmlNumeroCalculado.innerHTML = numeroCalculado;
        }

        //Resetar o numero de cima
        digitandoNumero = 0;
        htmlDigitandoNumero.innerHTML = digitandoNumero + simbolo;
    }
    else
    {
        simbolo = "";
        htmlDigitandoNumero.innerHTML = digitandoNumero + simbolo;
    }
});

function realizarOperacao(simbolo, numeroUm, numeroDois)
{
    let resultado;
    parseFloat(resultado);
    parseFloat(numeroUm);
    parseFloat(numeroDois);

    switch(simbolo)
    {
        case "+":
        {
            resultado = numeroUm + numeroDois;
            break;
        }

        case "−":
        {
            resultado = numeroDois - numeroUm;
            break;
        }

        case "×":
        {
            resultado = numeroUm * numeroDois;
            break;
        }

        case "÷":
        {
            resultado = numeroDois / numeroUm;
            break;
        }

        case "%":
        {
            resultado = (numeroUm / 100) * numeroDois;
            break;
        }

        default:
        {
            return;
        }
    }

    return resultado;
}