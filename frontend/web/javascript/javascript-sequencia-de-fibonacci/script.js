document.querySelector("body").addEventListener("click", () => 
{
    calcularFibonacci(prompt("Veja se o número pertence à sequência de Fibonacci:"))
});

function calcularFibonacci(numero)
{
    console.clear()

    if ((numero != "" && numero != null) && (numero >= 0 || numero < 0))
    {
        let lista = [0, 1]
        numero = parseInt(numero);
    
        while(true)
        {
            lista.push(lista[lista.length - 2] + lista[lista.length - 1])
            
            if (lista[lista.length - 1] >= numero)
            {
                console.log(lista)
    
                if (lista[lista.length - 1] == numero || numero == 0)
                {
                    console.log("O número " + numero + " pertence à sequência de Fibonacci.")
                }
                else
                {
                    console.log("O número " + numero + " não pertence à sequência Fibonacci.")
                }

                break;
            }
        }
    }
    else
    {
        console.log("Digite um número válido")
    }
}