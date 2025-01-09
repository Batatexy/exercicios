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
export const addToCart = (id, discountedPrice) => 
{
    //Remover o evento de ir para outro site da divPai
    event.stopPropagation();

    //Puxar a lista do localStorage
    let carrinho = getListaCarrinho();

    //Condição para dar push ou apenas substituir a lista atual
    let aumentarQuantidade = false;

    //Na página do produto, é possivel adicionar mais de 1 unidade por item 
    let quantidadeSelecionada = 1;

    //Somente na pagina do produto, em qualquer outro lugar, se adiciona apenas 1 unidade
    if (document.getElementById("inputQuantity"))
    {
        //Pega do input o valor e transforma em int
        quantidadeSelecionada = parseInt(document.getElementById("inputQuantity").value);
    }
    
    //Criar um objeto novo
    let item =
    {
        id: id,
        quantidade: quantidadeSelecionada,
    };

    //Verificar na lista puxada, se já existe um item
    carrinho.forEach((produto, index) => 
    {
        //Verifica o id enviado pela função com algum possivel id na lista
        if (produto.id == id)
        {
            //Se existir, puxa a informação de quantidade e soma 1
            item.quantidade = produto.quantidade + quantidadeSelecionada;

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
        atualizarCarrinho(id, discountedPrice);
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
    mudarNumeroItensCarrinho();

    document.getElementById("item-carrinho-" + id).remove();
    
    calcularPrecoTotal().then(retorno => document.querySelector(".preco-total").textContent = "Preço total: " + tratarPreco(retorno));
}

//Remover 1 unidade, acessivel apenas na pagina do carrinho
export const removerUnidade = (id, discountedPrice) => 
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
            mudarNumeroItensCarrinho();

            //Atualiza os valores na pagina
            atualizarCarrinho(id, discountedPrice);
        }
    });
}

//Função para encontrar a div dos itens do carrinho e remover seu conteudo
export function atualizarCarrinho(id, discountedPrice)
{
    const item = document.getElementById("item-carrinho-" + id);
    let carrinho = getListaCarrinho();

    carrinho.forEach((produto, index) =>
    {
        if (produto.id == id)
        {
            //Atualizar valores de quantidade e quantidaded*preço na pagina
            item.querySelector(".quantidade").textContent = "Quantidade: " + produto.quantidade;
            item.querySelector(".preco-multiplicado").textContent = "Preço: R$" + tratarPreco(multiplicarPrecos(id, discountedPrice));

            //Atualizar valor do preço total, usando o retorno da promise sendo tratado (Não sei como funciona)
            //calcularPrecoTotal().then(retorno =>)
            calcularPrecoTotal().then(retorno => document.querySelector(".preco-total").textContent = "Preço total: " + tratarPreco(retorno));
        }
    });
}

//Retornar o valor total vindo de um fetch
export function calcularPrecoTotal()
{
    let carrinho = getListaCarrinho();
    let precoTotal = 0;

    let precoTotalFinal = fetch("products.json")
    .then((response) => response.json())
    .then((products) => 
    {
        //Roda essa lista, criando os cards apenas dos IDs salvos nela
        carrinho.forEach(item => 
        {
            //Já tem os IDs salvos, basta puxa-los e salvar seu respectivo objeto
            const product = products.find((produto) => produto.id === parseInt(item.id));

            if (product) 
            {
                precoTotal += multiplicarPrecos(product.id, product.discountedPrice);
            }
        });

        return precoTotal;
    })
    .catch((error) => console.error("Erro ao carregar produtos:", error));

    //Retorna uma promise, sendo tratado depois
    return precoTotalFinal;
}

export function prosseguirPagamento()
{
    calcularPrecoTotal().then(retorno => 
        {
        if (retorno > 0)
        {
            //Ir para area de pagamento, como não tem, vai pro index
            goToPage("index.html");

            //Depois do pagamento seria resetado o carrinho
            setListaCarrinho([]);
        }
    })
}

//Função para mudar a exibição da quantidade de itens adicionados ao carrinho
export function mudarNumeroItensCarrinho()
{
    //Encontrar o número contido no botão
    let NumeroItensHTML = document.getElementById("numero-itens-carrinho");

    let carrinho = getListaCarrinho();

    //Definir um valor zerado, para somá-lo
    let quantidade = 0;

    carrinho.forEach(produto => 
    {
        //Somar para cada unidade de cada item
        quantidade += produto.quantidade;
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
            //let discountedPriceFloat = parseFloat(discountedPrice.replace(",", ".").replace("R$", ""));
            //multiplicacao = discountedPriceFloat * produto.quantidade

            multiplicacao = produto.quantidade * discountedPrice;
        }
    });

    return multiplicacao;
}

//Transformar números float em string e forçá-los a ter ,00 / 2 casas decimais, tambem troca os . por ,
export function tratarPreco(precoFloat)
{
    if (precoFloat != null)
    {
        let precoString = precoFloat.toFixed(2);
    
        return precoString.replace("." , ",");
    }
    else
    {
        return;
    }
}

//Função dinamica de redirecionamento de páginas
export function goToPage(page) 
{
   window.location.href = page;
}