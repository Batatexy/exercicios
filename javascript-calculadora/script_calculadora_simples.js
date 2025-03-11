let resultadoHTML = document.getElementById("h4-resultado")

let botaoSomar = document.getElementById("botao-somar");
botaoSomar.addEventListener("click", () => 
{
    resultadoHTML.textContent = "Resultado: " + calcularDois(botaoSomar.textContent);
})

function calcularDois(sinal)
{
    console.log(sinal)
    let resultadoValor;
    let um = parseFloat(prompt("Digite o primeiro numero:"))
    let dois = parseFloat(prompt("Digite o primeiro numero:"))

    if (sinal == "+") {
        resultadoValor = um + dois
    }

    if (sinal == "-") {
        resultadoValor = dois - um
    }

    if (sinal == "X") {
        resultadoValor = um * dois
    }

    if (sinal == "/") {
        resultadoValor = um / dois
    }

    return resultadoValor;
}



//Função para calcular somas, subtração, etc... entre dois números
function calcular(numeroUm, numeroDois, operacao) 
{
    let resultado;
    numeroUm = parseInt(numeroUm);
    numeroDois = parseInt(numeroDois);
    
    switch (operacao)
    {
        case "+":
        {
            resultado = numeroUm + numeroDois;
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
document.querySelector('.calculadora-simples .menos').addEventListener('click', () =>
{
    calcular(
    document.querySelector('.calculadora-simples #numero-um').value, 
    document.querySelector('.calculadora-simples #numero-dois').value,
    document.querySelector('.calculadora-simples .menos').textContent);
});

//Multiplicação
document.querySelector('.calculadora-simples .multiplicacao').addEventListener('click', () =>
{
    let resultado = document.querySelector('.calculadora-simples #numero-um').value *
                    document.querySelector('.calculadora-simples #numero-dois').value;
    exibirResultado(resultado)
});

//Divisão
document.querySelector('.calculadora-simples .divisao').addEventListener('click', () =>
{
    document.querySelector(".calculadora-simples #resultado").innerHTML = 
    document.querySelector('.calculadora-simples #numero-um').value /
    document.querySelector('.calculadora-simples #numero-dois').value;
});