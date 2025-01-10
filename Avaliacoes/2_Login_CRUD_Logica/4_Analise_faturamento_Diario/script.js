faturamento()
function faturamento()
{
    fetch("faturamento.json")
    .then((response) => response.json())
    .then((faturamento) => 
    {
        let maiorValor = [0,0];
        let menorValor = [0,faturamento.dias[0].valor];

        let numeroDias = 0;
        let media = 0;

        faturamento.dias.forEach((item, index) => 
        {
            if (item.valor > 0)
            {
                if (item.valor > maiorValor[1])
                {
                    maiorValor[0] = item.dia
                    maiorValor[1] = item.valor;
                }
    
                if (item.valor < menorValor[1])
                {
                    menorValor[0] = item.dia
                    menorValor[1] = item.valor;
                }

                numeroDias++;
                media += item.valor;
            }
        });

        media /= numeroDias;
        numeroDias = 0;
        
        faturamento.dias.forEach((item, index) => 
        {
            if (item.valor > 0 && item.valor > media)
            {
                numeroDias++;
            }
        });

        console.log("O Maior faturamento foi de R$" +maiorValor[1] + " no Dia " + maiorValor[0] + " ");
        console.log("O Menor faturamento foi de R$" +menorValor[1] + " no Dia " + menorValor[0] + " ");

        console.log("A Média Mensal foi de: " + media)
        console.log("Número de Dias em que o faturamento foi maior à Média Mensal: " + numeroDias + " Dias")
    })
    .catch((error) => console.error("Erro ao carregar faturamento:", error));
}