import { carregarCarrinho } from "./carrinho.js";

function setListaCarrinho(carrinho)
{
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function getListaCarrinho()
{
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

export const removerItem = (id) => 
{



    const container = document.getElementById("carrinho-container");
    container.textContent = "";
}

/* IMPLEMENTAR MÉTODO DE ADICIONAR AO CARRINHO */
export const addToCart = (id) => 
{
    let carrinho = getListaCarrinho();
    let aumentarQuantidade = false;
    let item =
    {
        id: id,
        status: "ativo",
        quantidade: 1,
    }

    carrinho.forEach((produto, index) => 
    {
        if (produto.id == id)
        {
            item.quantidade = produto.quantidade + 1;
            carrinho[index] = item;

            aumentarQuantidade = true;
        }
    });

    if (!aumentarQuantidade)
    {
        carrinho.push(item);
    }

    setListaCarrinho(carrinho);
    mudarNumeroItensCarrinho()
};

export function mudarNumeroItensCarrinho()
{
    let NumeroItensHTML = document.getElementById("numero-itens-carrinho");

    let carrinho = getListaCarrinho();
    NumeroItensHTML.textContent = carrinho.length;
}



/* Buscar produtos e exibir em tela */

export function goToPage(page) 
{
   window.location.href = page;
}