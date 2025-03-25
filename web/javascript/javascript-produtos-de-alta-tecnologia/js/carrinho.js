import { getListaCarrinho } from "./gettersAndSetters.js";
import { goToPage, mudarNumeroItensCarrinho, calcularPrecoTotal, tratarPreco } from "./utlis.js";
import { createCartCard, createNavBar } from "./getTemplates.js";

document.querySelector("div").appendChild(createNavBar());
calcularPrecoTotal().then(retorno => document.querySelector(".preco-total").textContent = "Preço total: " + tratarPreco(retorno));
mudarNumeroItensCarrinho();

fetch("products.json")
.then((response) => response.json())
.then((products) => 
{
   //De alguma forma o script da página index carrega essa função, precisando ter essa condição
   if (document.getElementById("carrinho-container"))
   {
      //Encontrar a div onde serão adicionados os itens
      const container = document.getElementById("carrinho-container");
   
      //Puxa informações do localStorage sobre quais são os itens adicionados e suas respectivas unidades
      let carrinho = getListaCarrinho();

      //Roda essa lista, criando os cards apenas dos IDs salvos nela
      carrinho.forEach(item => 
      {
         //Já tem os IDs salvos, basta puxa-los e salvar seu respectivo objeto
         const product = products.find((produto) => produto.id === parseInt(item.id));

         if (product) 
         {
            //Criar seu card e adicionar à pagina
            const productCard = createCartCard(product, item.quantidade);
            container.appendChild(productCard);
         }
      });
   }
})
.catch((error) => console.error("Erro ao carregar produtos:", error));

//Prosseguir para o Pagamento

document.getElementById("continuar-pagamento").addEventListener("click", () => 
{
   calcularPrecoTotal().then(retorno => 
   {
      if (retorno > 0)
      {
         //Ir para area de pagamento, como não tem, vai pro index
         goToPage("pagamento.html");

         //Depois do pagamento seria resetado o carrinho
         //setListaCarrinho([]);
      }
   })
})

