import { getUsuario } from "./gettersAndSetters.js";
import { tratarPreco, goToPage, addToCart, removerItem, removerUnidade, multiplicarPrecos, logoutUsuario } from "./utlis.js";

export function createProductCard({
id,
badgeText,
imageUrl,
imageAlt,
productName,
reviews,
originalPrice,
discountedPrice
}) 
{
    const colDiv = document.createElement("div");
    colDiv.className = "col mb-5";
    
        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100";

    /* Quero adicionar um onclick na div pai de todos (a colDiv) um onClick para me redirecionar para a tela de produto */
    //Não adicionei esta função na divPai, pois apresenta um padding, coloquei em uma mais dentro
    cardDiv.role = "button";
    cardDiv.addEventListener("click", () => 
    {
        //Alterado a função de ir apenas para uma pagina, agora é dá pra inserir qualquer link na função
        //goToProduct(id) 
        goToPage(`product.html?id=${id}`)
    })

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
            reviewsDiv.className = "d-flex justify-content-center small text-warning mb-2";
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

            const cardFooterDiv = document.createElement("div");
            cardFooterDiv.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";

            const buttonContainerDiv = document.createElement("div");
            buttonContainerDiv.className = "text-center";

            const button = document.createElement("button");
            button.className = "btn btn-outline-dark mt-auto";
            
            /* MÉTODO PARA ADICIONAR AO CARRINHO */
            //Agora passa o id para a função e o preço de desconto para executar sua multiplicação mais pra frente
            button.onclick = () => addToCart(id, discountedPrice);
            button.textContent = "Adicionar ao Carrinho";

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










export function createProductDetailsWithImage(product) 
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










export function createCartCard
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










export function createNavBar()
{
    let nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-light bg-light position-fixed w-100  border-bottom border-secondary"

        let divContainer = document.createElement("div");
        divContainer.className = "container px-4 px-lg-5";

            let a = document.createElement("a");
            a.className = "navbar-brand";
            a.href = "index.html";
            a.textContent = "SimplesTech";

            let divBotoes = document.createElement("div");
            divBotoes.className = "d-flex justify-content-between";
            divBotoes.id = "navbarSupportedContent";

                let usuario = getUsuario();
                let login;
                let botaoLogout;

                if (usuario == 0)
                {
                    login = document.createElement("button")
                    login = createLoginButton(login)
                }
                else
                {
                    login = document.createElement("p");
                    login.className = "ola-usuario";
                    login.textContent = "Olá " + usuario[0];

                    botaoLogout = document.createElement("button");
                    botaoLogout.className = "btn btn-outline-dark";
                    botaoLogout.id = "botao-logout"
                    botaoLogout.textContent = "Logout";
                    botaoLogout.addEventListener("click", () => 
                    {
                        logoutUsuario();
                    })
                }

                login.id = "botao-login";
                
                let botaoCarrinho = document.createElement("button");
                botaoCarrinho = createBotaoCarrinho(botaoCarrinho);

                

            divBotoes.appendChild(login);
            divBotoes.appendChild(botaoCarrinho);
            if (botaoLogout)
            {
                divBotoes.appendChild(botaoLogout);
            }
        
        divContainer.appendChild(a);
        
        divContainer.appendChild(divBotoes);

    nav.appendChild(divContainer)

    return nav;

    /* 
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
 */
}   

export function createLoginButton(login)
{
    login = document.createElement("button");
    login.textContent = "Login";
    login.className = "btn btn-outline-dark me-1";
    login.type = "button";
    login.addEventListener("click", () => 
    {
        goToPage("login.html")
    })

    return login;
}

export function createBotaoCarrinho(botaoCarrinho)
{
    botaoCarrinho.className = "btn btn-outline-dark me-1";
    botaoCarrinho.type = "button";
    botaoCarrinho.id = "carrinho";
    botaoCarrinho.addEventListener("click", () => 
    {
        goToPage("carrinho.html")
    })

        let i = document.createElement("i");
        i.className = "bi-cart-fill me-1";

        botaoCarrinho.textContent = "Carrinho";

        let span = document.createElement("span");
        span.className = "badge bg-dark text-white ms-1 rounded-pill";
        span.id = "numero-itens-carrinho";

    botaoCarrinho.appendChild(i);
    botaoCarrinho.appendChild(span);

    return botaoCarrinho;
}






