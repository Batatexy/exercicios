import { goToPage, mudarNumeroItensCarrinho } from "./utlis.js";
import { createProductDetailsWithImage, createNavBar } from "./getTemplates.js";

document.querySelector("div").appendChild(createNavBar());

document.getElementById("carrinho").addEventListener("click", () => 
{
   goToPage("carrinho.html")
})

//Função para pegar o URL enviado na url do navegador e a retorna
function getProductIdFromUrl()
{
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

mudarNumeroItensCarrinho();

fetch("products.json")
.then((response) => response.json())
.then((products) => 
{
   //Pega a URL do navegador e encontra no arquivo json seu respectivo produto
   const product = products.find((produto) => produto.id === parseInt(getProductIdFromUrl()));

   //Se o produto existir
   if (product) 
   {
      //Encontra a div onde será adicionado as informações do produto
      const container = document.getElementById("product-container");

      //Cria o seu elemento e adiciona à página
      const productDetail = createProductDetailsWithImage(product);
      container.appendChild(productDetail);
   } 
   else
   {
      //alert("Produto não encontrado!");
      //Retorna para a página inicial
      goToPage("index.html");
   }
})
.catch((error) => console.error("Erro ao carregar produto:", error));
