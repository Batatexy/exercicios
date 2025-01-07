import { goToPage, getListaCarrinho, mudarNumeroItensCarrinho, removerItem } from "./utlis.js";

function createCartCard
(
   {
      id,
      badgeText,
      imageUrl,
      imageAlt,
      productName,
      reviews,
      originalPrice,
      discountedPrice,
      buttonText,
   }
   ,
   quantidade
) 
{
	const colDiv = document.createElement("div");
	colDiv.className = "col mb-5";
   /* Quero adicionar um onclick na div pai de todos (a colDiv) um onClick para me redirecionar para a tela de produto */
   //Se clicar em adicionar ao carrinho, também entra na pagina do produto
   colDiv.addEventListener("click", () => 
   {
      //goToProduct(id) 
      //goToPage(`product.html?id=${id}`)
   })

		const cardDiv = document.createElement("div");
		cardDiv.className = "card h-100";

         const badgeDiv = document.createElement("div");
         badgeDiv.className = "badge bg-dark text-white position-absolute";
         badgeDiv.style.top = "0.5rem";
         badgeDiv.style.right = "0.5rem";
         badgeDiv.textContent = badgeText;

         const img = document.createElement("img");
         img.className = "card-img-top";
         img.src = imageUrl;
         img.alt = imageAlt;

         const cardBodyDiv = document.createElement("div");
         cardBodyDiv.className = "card-body p-4";

            const textCenterDiv = document.createElement("div");
            textCenterDiv.className = "text-center";

            const productNameH5 = document.createElement("h5");
            productNameH5.className = "fw-bolder";
            productNameH5.textContent = productName;

            const reviewsDiv = document.createElement("div");
            reviewsDiv.className =
               "d-flex justify-content-center small text-warning mb-2";
            for (let i = 0; i < reviews; i++) 
            {
               const starDiv = document.createElement("div");
               starDiv.className = "bi-star-fill";
               reviewsDiv.appendChild(starDiv);
            }

            const originalPriceSpan = document.createElement("span");
            originalPriceSpan.className = "text-muted text-decoration-line-through";
            originalPriceSpan.textContent = originalPrice;

            const discountedPriceText = document.createTextNode(` ${discountedPrice}`);

            const cardFooterDiv = document.createElement("div");
            cardFooterDiv.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";

            const buttonContainerDiv = document.createElement("div");
            buttonContainerDiv.className = "text-center";

            const button = document.createElement("button");
            button.className = "btn btn-outline-dark mt-auto";
            
            /* MÉTODO PARA ADICIONAR AO CARRINHO */
            button.onclick = () => removerItem(id);
            button.textContent = quantidade;

            textCenterDiv.appendChild(productNameH5);
            textCenterDiv.appendChild(reviewsDiv);
            textCenterDiv.appendChild(originalPriceSpan);
            textCenterDiv.appendChild(discountedPriceText);

         cardBodyDiv.appendChild(textCenterDiv);

         buttonContainerDiv.appendChild(button);
         cardFooterDiv.appendChild(buttonContainerDiv);

		cardDiv.appendChild(badgeDiv);
		cardDiv.appendChild(img);
		cardDiv.appendChild(cardBodyDiv);
		cardDiv.appendChild(cardFooterDiv);

	colDiv.appendChild(cardDiv);

	return colDiv;
}

mudarNumeroItensCarrinho();
carregarCarrinho()

export function carregarCarrinho()
{
   fetch("products.json")
   .then((response) => response.json())
   .then((products) => 
   {
      const container = document.getElementById("carrinho-container");
      
      let carrinho = getListaCarrinho();

      carrinho.forEach(item => 
      {
         const product = products.find((produto) => produto.id === parseInt(item.id));
         const productCard = createCartCard(product, item.quantidade);

         //Por algum motivo isso aqui tá apitando erro
         container.appendChild(productCard);
      });
   })
   .catch((error) => console.error("Erro ao carregar produtos:", error));
}


         
      
