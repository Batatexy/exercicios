import { goToPage, mudarNumeroItensCarrinho } from "./utlis.js";
import { createProductCard, createNavBar } from "./getTemplates.js";

//Criar o Nav Dinamicamente
document.querySelector("header").append(createNavBar());

//Clickar no carrinho te leva para sua página
document.getElementById("carrinho").addEventListener("click", () => 
{
   goToPage("carrinho.html");
})

//Função para atualizar o número de itens na lista ao lado do botão do carrinho
mudarNumeroItensCarrinho();

//Buscar no documento json os produtos
fetch("products.json")
.then((response) => response.json())
.then((products) =>
{
   //Encontrar div onde será adicionado cada produto
   const container = document.getElementById("products-container");
   products.forEach((product) => 
   {
      //Encontrar cada produto e enviar para a função de criar um card
      const productCard = createProductCard(product);

      //Adiciona ao container
      container.appendChild(productCard);
   });
})
.catch((error) => console.error("Erro ao carregar produtos:", error));
