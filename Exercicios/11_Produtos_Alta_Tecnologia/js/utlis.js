import { carregarCarrinho } from "./carrinho.js";

//Definir uma nova lista no localStorage
function setListaCarrinho(carrinho)
{
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

//Se existir, puxar a lista do localStorage, senão puxa uma lista vazia
export function getListaCarrinho()
{
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

/* IMPLEMENTAR MÉTODO DE ADICIONAR AO CARRINHO */
//Adiciona um item, quando não existente na lista, ou soma 1 unidade
export const addToCart = (id) => 
{
    //Remover o evento de ir para outro site da divPai
    event.stopPropagation();

    //Puxar a lista do localStorage
    let carrinho = getListaCarrinho();

    //Condição para dar push ou apenas substituir a lista atual
    let aumentarQuantidade = false;

    //Criar um objeto novo
    let item =
    {
        id: id,
        quantidade: 1,
    };

    //Verificar na lista puxada, se já existe um item
    carrinho.forEach((produto, index) => 
    {
        //Verifica o id enviado pela função com algum possivel id na lista
        if (produto.id == id)
        {
            //Se existir, puxa a informação de quantidade e soma 1
            item.quantidade = produto.quantidade + 1;

            //Substitui o item na sua respectiva posição
            carrinho[index] = item;

            //Troca a variavel de condição
            aumentarQuantidade = true;
        }
    });

    //Caso seja um novo item, a variavel inicial não será trocada
    if (!aumentarQuantidade)
    {
        carrinho.push(item);
    }

    //Independente do resultado, será salva a nova lista
    setListaCarrinho(carrinho);

    //recarregar o número de itens no carrinho, essa função aparecerá bastante
    mudarNumeroItensCarrinho();

    //Condição para caso a função seja chamada na pagina carrinho, onde se deve ser atualizado a quantidade
    //de unidades em cada item, evitando erro na página index, pois não existe o "carrinho-container" nela
    if (document.getElementById("carrinho-container"))
    {
        apagarItensCarrinho()
        carregarCarrinho();
    }
};

//Remove o item por completo, acessivel apenas na pagina do carrinho
export const removerItem = (id) => 
{
    let carrinho = getListaCarrinho();
    carrinho.forEach((produto, index) => 
    {
        if (produto.id == id)
        {
            //Remove 1 item na posição index
            carrinho.splice(index, 1);
        }
    });

    setListaCarrinho(carrinho);
    mudarNumeroItensCarrinho()

    apagarItensCarrinho()
    carregarCarrinho();
}

//Remover 1 unidade, acessivel apenas na pagina do carrinho
export const removerUnidade = (id) => 
{
    let carrinho = getListaCarrinho();
    carrinho.forEach((produto, index) => 
    {
        //Alem de verificar qual item está sendo alterado, verifica se há mais que 1 unidade, para não ficar 
        //com o valor de unidades em 0
        if (produto.id == id && carrinho[index].quantidade > 1)
        {
            //Remover 1 unidade
            carrinho[index].quantidade -= 1;

            setListaCarrinho(carrinho);
            mudarNumeroItensCarrinho()

            //Remove o conteudo da pagina
            apagarItensCarrinho()
            //e os recarrega
            carregarCarrinho();
        }
    });
}

//Função para encontrar a div dos itens do carrinho e remover seu conteudo
export function apagarItensCarrinho()
{
    const container = document.getElementById("carrinho-container");
    container.textContent = "";
}

//Função para mudar a exibição da quantidade de itens adicionados ao carrinho
export function mudarNumeroItensCarrinho()
{
    //Encontrar o número contido no botão
    let NumeroItensHTML = document.getElementById("numero-itens-carrinho");

    let carrinho = getListaCarrinho();

    //Definir um valor zerado, para somá-lo
    let quantidade = 0;

    carrinho.forEach(item => 
    {
        //Somar para cada unidade de cada item
        quantidade += item.quantidade;
    });
    //Antes eu usei lenght, mas fica melhor saber a unidade de cada item
    //NumeroItensHTML.textContent = carrinho.length;

    //Mudar seu textcontent
    NumeroItensHTML.textContent = quantidade;
}

//Enviar id e o valor desejado para multiplicar com a quantidade de itens na lista
export function multiplicarPrecos(id, discountedPrice)
{
    let carrinho = getListaCarrinho();
    let multiplicacao;
    carrinho.forEach((produto, index) => 
    {
        if (produto.id == id)
        {
            //Tratamento dos dados no json por estarem salvos como: "R$40,99"
            let discountedPriceFloat = parseFloat(discountedPrice.replace(",", ".").replace("R$", ""));
            multiplicacao = discountedPriceFloat * produto.quantidade
        }
    });

    return multiplicacao;
}

//Função dinamica de redirecionamento de páginas
export function goToPage(page) 
{
   window.location.href = page;
}