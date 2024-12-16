//Função para calcular somas, subtração, etc... entre dois números
function calcular(numeroUm, numeroDois, operacao) 
{
    var resultado;
    
    switch (operacao)
    {
        case "+":
        {
            resultado = parseInt(numeroUm) + parseInt(numeroDois);
            break;
        }

        case "-":
        {
            resultado = numeroUm - numeroDois;
            break;
        }

        case "*":
        {
            resultado = numeroUm * numeroDois;
            break;
        }

        case "/":
        {
            resultado = numeroUm / numeroDois;
            break;
        }
    }

    exibirResultado(resultado);
}

//Pega um valor e exibe no lugar de h3 #resultado
function exibirResultado(resultado)
{
    document.querySelector(".calculadora-simples #resultado").innerHTML = resultado;
}

//Subtração
document.querySelector('.calculadora-simples .menos').addEventListener('click', function() 
{
    calcular(
    document.querySelector('.calculadora-simples #numero-um').value, 
    document.querySelector('.calculadora-simples #numero-dois').value,
    document.querySelector('.calculadora-simples .menos').textContent);
});

//Multiplicação
document.querySelector('.calculadora-simples .multiplicacao').addEventListener('click', function() 
{
    var resultado = document.querySelector('.calculadora-simples #numero-um').value *
                    document.querySelector('.calculadora-simples #numero-dois').value;
    exibirResultado(resultado)
});

//Divisão
document.querySelector('.calculadora-simples .divisao').addEventListener('click', function() 
{
    document.querySelector(".calculadora-simples #resultado").innerHTML = 
    document.querySelector('.calculadora-simples #numero-um').value /
    document.querySelector('.calculadora-simples #numero-dois').value;
});














//Calculadora complexa:
var salvarNumero = "";
var numeroUm = 0;
var operador = "";
var ultimoNum = 0;

//7
document.querySelector('.calculadora-complexa .sete').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {
        salvarNumero = "7"
    }
    else
    {
        salvarNumero += "7";
    }

    ultimoNum = 7;
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//8
document.querySelector('.calculadora-complexa .oito').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "8"}else{salvarNumero += "8";} ultimoNum = 8;
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//9
document.querySelector('.calculadora-complexa .nove').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "9"}else{salvarNumero += "9";} ultimoNum = 9;
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//4
document.querySelector('.calculadora-complexa .quatro').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "4"}else{salvarNumero += "4";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//5
document.querySelector('.calculadora-complexa .cinco').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "5"}else{salvarNumero += "5";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//6
document.querySelector('.calculadora-complexa .seis').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "6"}else{salvarNumero += "6";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//1
document.querySelector('.calculadora-complexa .um').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "1"}else{salvarNumero += "1";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//2
document.querySelector('.calculadora-complexa .dois').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "2"}else{salvarNumero += "2";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//3
document.querySelector('.calculadora-complexa .tres').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "3"}else{salvarNumero += "3";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//0
document.querySelector('.calculadora-complexa .zero').addEventListener('click', function() 
{
    if (document.querySelector(".calculadora-complexa #resultado").textContent == 0)
    {salvarNumero = "0"}else{salvarNumero += "0";}
    document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});

//C
document.querySelector('.calculadora-complexa .ce').addEventListener('click', function() 
{
    numeroUm=0;
    salvarNumero=""
    document.querySelector(".calculadora-complexa #resultado").innerHTML = "0";
    document.querySelector(".calculadora-complexa #resultado-dois").innerHTML = "";
});

//Backspace
document.querySelector('.calculadora-complexa .backspace').addEventListener('click', function() 
{
    document.querySelector(".calculadora-complexa #resultado").innerHTML = 
    (document.querySelector(".calculadora-complexa #resultado").textContent-=parseInt(ultimoNum)) / 10
    ;
});

//Mais
document.querySelector('.calculadora-complexa .mais').addEventListener('click', function() 
{
    if (salvarNumero != 0)
    {
        //Primeiro numero
        if (numeroUm == 0)
        {
            numeroUm = parseInt(salvarNumero);
        }
        else
        {
            numeroUm += parseInt(salvarNumero);
        }

        document.querySelector(".calculadora-complexa #resultado").innerHTML = "0";
        document.querySelector(".calculadora-complexa #resultado-dois").innerHTML = numeroUm;

        salvarNumero="";
    }
});





document.querySelector('.calculadora-complexa .igual').addEventListener('click', function() 
{
    //document.querySelector(".calculadora-complexa #resultado").innerHTML = salvarNumero;
});