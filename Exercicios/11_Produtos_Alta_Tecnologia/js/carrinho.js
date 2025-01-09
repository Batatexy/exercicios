import { goToPage, getListaCarrinho, mudarNumeroItensCarrinho, removerItem, removerUnidade, addToCart, 
         multiplicarPrecos, tratarPreco, prosseguirPagamento } from "./utlis.js";

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
      discountedPrice
   }
   ,
   quantidade
)
{
	const colDiv = document.createElement("div");
	colDiv.className = "w-100";
   colDiv.id = "item-carrinho-" + id;

		const cardDiv = document.createElement("div");
		cardDiv.className = "d-flex h-100";

         const badgeDiv = document.createElement("div");
         badgeDiv.className = "badge bg-dark text-white position-absolute border-black";
         badgeDiv.textContent = badgeText;

         const img = document.createElement("img");
         img.className = "h-75";
         img.src = imageUrl;
         img.alt = imageAlt;
         img.role = "button";
         img.addEventListener("click", () => 
         {
            goToPage(`product.html?id=${id}`)
         })

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
            originalPriceSpan.textContent = "R$" + tratarPreco(originalPrice);

            const discountedPriceText = document.createTextNode(`R$${tratarPreco(discountedPrice)}`);



            //Exibir quantidade de itens e seu valor multiplicado
            const quantity = document.createElement("h4");
            quantity.className = "text-center pt-4 quantidade"
            quantity.textContent = "Quantidade: " + quantidade;

            const quantityPrice = document.createElement("h4");
            quantityPrice.className = "text-center preco-multiplicado"
            quantityPrice.textContent = "Preço: R$" + tratarPreco(multiplicarPrecos(id, discountedPrice));
            


            const cardFooterDiv = document.createElement("div");
            cardFooterDiv.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";

            const buttonContainerDiv = document.createElement("div");
            buttonContainerDiv.className = "text-center";

            //Botões de adicionar ou remover 1
               const buttonAddUnity = document.createElement("button");
               buttonAddUnity.className = "btn btn-outline-dark mt-auto m-1";
               buttonAddUnity.onclick = () => addToCart(id, discountedPrice);
               buttonAddUnity.textContent = "+";

               const buttonRemoveUnity = document.createElement("button");
               buttonRemoveUnity.className = "btn btn-outline-dark mt-auto m-1";
               buttonRemoveUnity.onclick = () => removerUnidade(id, discountedPrice);
               buttonRemoveUnity.textContent = "–";

            //Botão de remover o item por completo
               const buttonRemove = document.createElement("button");
               buttonRemove.className = "btn btn-outline-dark mt-auto m-1 botao-remover";
               buttonRemove.onclick = () => removerItem(id);
               buttonRemove.textContent = "×";

            textCenterDiv.appendChild(productNameH5);
            textCenterDiv.appendChild(reviewsDiv);
            textCenterDiv.appendChild(originalPriceSpan);
            textCenterDiv.appendChild(discountedPriceText);
            
         cardBodyDiv.appendChild(textCenterDiv);
         cardBodyDiv.appendChild(quantity);
         cardBodyDiv.appendChild(quantityPrice);
         
         buttonContainerDiv.appendChild(buttonAddUnity);
         buttonContainerDiv.appendChild(buttonRemoveUnity);
         buttonContainerDiv.appendChild(buttonRemove);
         cardFooterDiv.appendChild(buttonContainerDiv);

		cardDiv.appendChild(badgeDiv);
		cardDiv.appendChild(img);
		cardDiv.appendChild(cardBodyDiv);
		cardDiv.appendChild(cardFooterDiv);

	colDiv.appendChild(cardDiv);

	return colDiv;
}

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

      let precoTotal = 0;

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

            precoTotal += multiplicarPrecos(product.id, product.discountedPrice);
         }
      });

      const areaPagamento = document.getElementById("area-pagamento");
      areaPagamento.textContent = "";
      areaPagamento.classList = "d-flex justify-content-end ";

         const divPrecoTotal = document.createElement("h3");
         divPrecoTotal.className = "pt-1 preco-total";
         divPrecoTotal.textContent = "Preço total: R$" + tratarPreco(precoTotal);

         const divBotaoAreaPagamento = document.createElement("div");

            const botaoAreaPagamento = document.createElement("div");
            botaoAreaPagamento.className = "continuar-pagamento btn btn-outline-dark flex-shrink-0 p-2 ms-3 me-4";
            botaoAreaPagamento.textContent = "Continuar para o Pagamento";
            botaoAreaPagamento.addEventListener("click", () => 
            {
               prosseguirPagamento();
            })

         divBotaoAreaPagamento.append(botaoAreaPagamento);

      areaPagamento.appendChild(divPrecoTotal);
      areaPagamento.appendChild(divBotaoAreaPagamento);
   }
})
.catch((error) => console.error("Erro ao carregar produtos:", error));
         
      
