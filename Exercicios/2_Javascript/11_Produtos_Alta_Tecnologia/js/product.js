import { addToCart, goToPage, mudarNumeroItensCarrinho, tratarPreco } from "./utlis.js";

function createProductDetailsWithImage(product) 
{
   const container = document.createElement("div");
   container.className = "row";

      const imageColDiv = document.createElement("div");
      imageColDiv.className = "col-md-6";

      const productImage = document.createElement("img");
      productImage.className = "card-img-top mb-5 mb-md-0";
      productImage.src = product.imageUrl;
      productImage.alt = product.imageAlt || "Imagem do produto";
      imageColDiv.appendChild(productImage);

   container.appendChild(imageColDiv);

   const detailsColDiv = document.createElement("div");
   detailsColDiv.className = "col-md-6";

   const idDiv = document.createElement("div");
   idDiv.className = "small mb-1";
   idDiv.textContent = `ID: ${product.id}`;
   detailsColDiv.appendChild(idDiv);

   const productTitle = document.createElement("h1");
   productTitle.className = "display-5 fw-bolder";
   productTitle.textContent = product.productName;
   detailsColDiv.appendChild(productTitle);

   const priceDiv = document.createElement("div");
   priceDiv.className = "fs-5 mb-5";

   const originalPrice = document.createElement("span");
   originalPrice.className = "text-decoration-line-through";
   originalPrice.textContent = "R$" + tratarPreco(product.originalPrice);
   priceDiv.appendChild(originalPrice);

   const discountedPrice = document.createElement("span");
   discountedPrice.textContent = `R$${tratarPreco(product.discountedPrice)}`;
   priceDiv.appendChild(discountedPrice);

   detailsColDiv.appendChild(priceDiv);

   const description = document.createElement("p");
   description.className = "lead";
   description.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?";
   detailsColDiv.appendChild(description);

   const actionDiv = document.createElement("div");
   actionDiv.className = "d-flex";

   const quantityInput = document.createElement("input");
   quantityInput.className = "form-control text-center me-3";
   quantityInput.id = "inputQuantity";
   //Type number para impedir digitar numeros
   quantityInput.type = "number";
   quantityInput.value = "1";
   quantityInput.style.maxWidth = "5rem";
   actionDiv.appendChild(quantityInput);

   const addToCartButton = document.createElement("button");
   addToCartButton.className = "btn btn-outline-dark flex-shrink-0";
   addToCartButton.type = "button";

   /* Implementar Metodo */
   addToCartButton.onclick = () => addToCart(product.id, product.discountedPrice);

   const cartIcon = document.createElement("i");
   cartIcon.className = "bi-cart-fill me-1";
   addToCartButton.appendChild(cartIcon);

   const buttonText = document.createTextNode("Adicionar ao Carrinho");
   addToCartButton.appendChild(buttonText);

   actionDiv.appendChild(addToCartButton);

   detailsColDiv.appendChild(actionDiv);

   container.appendChild(detailsColDiv);

   return container;
}

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
