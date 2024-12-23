const botaoCheck = `<i class="bi bi-square"></i>`
const botaoCheckPressed = `<i class="bi bi-check-square-fill"></i>`
const botaoAplicar = `<i class="bi bi-check2-square" style="font-size:1.2rem; position:relative; top:1px;"></i>`
const botaoEditar = `<i class="bi bi-pencil-square"></i>`
const botaoExcluir = `<i class="bi bi-x-square"></i>`

const botaoCima = `<i class="bi bi-arrow-up-circle-fill"    style="font-size:2rem; position:relative; top:32px; right:47px;"></i>`                                                  
const botaoBaixo = `<i class="bi bi-arrow-down-circle-fill" style="font-size:2rem; position:relative; top:72px; right:96px;"></i>`

let lista = []
console.log(lista.length)
document.querySelector("#adicionar svg").addEventListener("click", () =>
{
    var elementoNovo = document.createElement("div");
    elementoNovo.className = "item-fora";

    let createID = lista.length;

    //Cria um objeto
    let novoItem =
    {
        id: createID,
        status: "ativo",
        check: false,
        titulo: "",
        descricao: "",
    };
    
    //Então adiciona à lista
    lista.push(novoItem);

    elementoNovo.id = createID;
    elementoNovo.innerHTML = montarItem("criar", lista[createID].id );

    //Cria o elemento div
    document.querySelector(".lista").appendChild(elementoNovo);
});

function proximoLivre()
{
    let quantidade = 0;

    for (let i=0; i < lista.length; i++)
    {
        if (lista[i].status == "ativo")
        {
            quantidade++;
        }
    }

    return quantidade;
}

function excluir(id)
{
    //if (confirm('Apagar tarefa?'))
    //{
        console.clear();
        console.log(document.getElementById(id));
        console.log(lista);

        //Excluir o item no html, mas trocar status no vetor
        document.getElementById(id).remove();
        lista[id].status = "excluido";
    //}
}

function aplicar(id)
{
    let itemHtml = document.getElementById(id);

    let titulo = itemHtml.querySelector(".item input");
    let descricao = itemHtml.querySelector(".item textarea");

    //Se o campo estiver vazio
    if (!titulo.value || !descricao.value)
    {
        console.log("campo vazio");

        if (!titulo.value)
        {
            titulo.className = "campo-vazio";
            titulo.placeholder = "Digite um Título";
        }

        if (!descricao.value)
        {
            descricao.className = "campo-vazio";
            descricao.placeholder = "Digite uma Descrição";
        }
    }
    else
    {
        lista[id].titulo = titulo.value;
        lista[id].descricao = descricao.value;

        itemHtml.innerHTML = montarItem("aplicar", id );
    }

    console.clear()
    console.log(lista);
}


function editar(id)
{
    let itemHtml = document.getElementById(id);
    console.log(itemHtml);

    itemHtml.innerHTML = montarItem("editar", id );

    console.clear();
    console.log(lista);
}

function montarItem(funcao, id)
{
    let texto = 
    `
        <div class="botoes-externos">
            <button class="mover-cima" onclick="moverCima(${id})">
                ${botaoCima}
            </button>

            <button class="mover-baixo" onclick="moverBaixo(${id})">
                ${botaoBaixo}
            </button>
        </div>

        <div class="item d-flex flex-column">
            <div class="d-flex justify-content-between">
    `;

    if (funcao == "aplicar")
    {
        texto += 
        ` 
            <div class="d-flex">
                <div class="check">
                    <button onclick="check(${id})">
        `;

        if (lista[id].check)
        {
            texto += botaoCheckPressed;
        }
        else
        {
            texto += botaoCheck;
        }


        texto += 
        `
                    </button>
                </div>
        `;
    }

    //Todos
    texto += 
    `
        <div class="numero-tarefa">
            Tarefa ${proximoLivre()}
        </div>
    `;

    if (funcao == "aplicar")
    {
        texto += "</div>";
    }
    
    if (funcao == "criar" || funcao == "editar")
    {
        texto +=
        `
        <div class="botoes">
            <button class="aplicar" onclick="aplicar(${id})">
                ${botaoAplicar}
            </button>
                
            <button class="excluir" onclick="excluir(${id})">
                ${botaoExcluir}
            </button>
        `;
    }
    //Aplicar
    else
    {
        texto +=
        `
        <div class="botoes">
            <button class="editar" onclick="editar(${id})">
                ${botaoEditar}
            </button>
                
            <button class="excluir" onclick="excluir(${id})">
                ${botaoExcluir}
            </button>
        `;
    }

    if(funcao == "criar" || funcao == "editar")
    {
        texto += 
        `
            </div>
        </div>

        <div class="d-flex flex-column"> 
            <div class="titulo">
                <input onclick="reset('input', ${id})" type="text" value="${lista[id].titulo}">
            </div>
                
            <div class="descricao">
                <textarea onclick="reset('textarea', ${id})">${lista[id].descricao}</textarea>
            </div>
        </div>
        `;
    }
    //Aplicar
    else
    {
        texto +=
        `
                </div>
            </div>
        
            <div class="titulo">
                <h3>${lista[id].titulo}</h3>
            </div>
            
            <div class="descricao">
                <p>${lista[id].descricao}</p>
            </div>
        `;
    }

    texto += "</div>"

    return texto;
}


//Check
function check(id)
{
    itemHtml = document.getElementById(id);
    let check = itemHtml.querySelector(".check button i");
    console.log(check);

    if (check.className == "bi bi-square")
    {
        itemHtml.className += " riscado";
        check.className = "bi bi-check-square-fill";
        lista[id].check = true;
    }
    else
    {
        itemHtml.className = "item-fora";
        check.className= "bi bi-square";

        lista[id].check = false;
    }

    console.clear();
    console.log(lista);
}

//Textarea quando clicada volta ao normal
function reset(tipo, id)
{
    console.log("Reset");
    let itemHtml = document.getElementById(id);
    itemHtml.querySelector(tipo).className = "";

    if (tipo == "textarea")
    {
        itemHtml.querySelector(".titulo textarea").className = "";
    }
    else
    {
        itemHtml.querySelector(".descricao input").className = "";
    }
}

function moverCima(id)
{
    let itemHtml = document.getElementById(id);

    if (lista[id-1] != null)
    {
        let itemDeCima = lista[id-1];

        console.log("Antes da Troca")
        console.log(itemDeCima)
        console.log(lista[id])

        
        lista[id-1]=lista[id];

        lista[id] = itemDeCima;
        


        let htmlDeCima = document.getElementById(id-1);
        htmlDeCima.innerHTML = montarItem("aplicar", id-1 );

        let itemHtml = document.getElementById(id);
        itemHtml.innerHTML = montarItem("aplicar", id );

        console.clear();
        console.log(lista);
    }
}


function moverBaixo(id)
{
    let itemHtml = document.getElementById(id);

    if (lista[id+1] != null)
    {
        let itemDeBaixo = lista[id+1];

        console.log("Antes da Troca")
        console.log(itemDeBaixo)
        console.log(lista[id])

        
        lista[id+1]=lista[id];
        lista[id] = itemDeBaixo;
        


        let htmlDeCima = document.getElementById(id+1);
        htmlDeCima.innerHTML = montarItem("aplicar", id+1 );

        let itemHtml = document.getElementById(id);
        itemHtml.innerHTML = montarItem("aplicar", id );

        console.clear();
        console.log(lista);
    }
}