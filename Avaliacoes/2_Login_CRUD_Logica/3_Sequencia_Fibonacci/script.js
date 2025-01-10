document.querySelector("body").addEventListener("click", () => 
{
    console.log(calcularFibonacci(prompt("Veja se o número pertence à sequência de Fibonacci:")))
});

function calcularFibonacci(numero)
{
    let lista = [0, 1]

    while(true)
    {
        lista.push(lista[lista.length - 2] + lista[lista.length - 1])
        
        if (lista[lista.length - 1] >= numero)
        {
            break;
        }
    }

    console.clear()
    console.log(lista)

    if (lista[lista.length - 1] == numero || numero == 0)
    {
        return "O número pertence à sequência de Fibonacci.";
    }
    else
    {
        return "O número não pertence à sequência Fibonacci."
    }
}