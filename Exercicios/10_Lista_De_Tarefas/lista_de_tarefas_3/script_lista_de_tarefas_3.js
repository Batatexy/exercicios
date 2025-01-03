//Variaveis de icones de botões:
const botaoCheck = `<i class="bi bi-square"></i>`
const botaoCheckPressed = `<i class="bi bi-check-square-fill"></i>`
const botaoAplicar = `<i class="bi bi-floppy-fill"></i>`
const botaoEditar = `<i class="bi bi-pencil-square"></i>`
const botaoExcluir = `<i class="bi bi-trash-fill"></i>`

const botaoCima = `<i class="bi bi-arrow-up-circle-fill"    style="font-size:2rem; position:relative; top:32px; right:47px;"></i>`                                      
const botaoBaixo = `<i class="bi bi-arrow-down-circle-fill" style="font-size:2rem; position:relative; top:72px; right:96px;"></i>`

//Ao resetar a pagina, essa variavel é resetada, ao criar os itens, ela vai sendo somada, para aparecer:
//tarefa 1, tarefa 2, tarefa3...
let autoIncrement = 0;

atualizaTarefasTela();

function atualizaTarefasTela() {
    getListaTarefas().forEach(tarefa => {
        adicionaTarefaTela(tarefa);
    });
}

function getListaTarefas() {
    return JSON.parse(localStorage.getItem("lista")) || [];
}


function setTarefa(tarefa) {
    let novaLista = getListaTarefas();
    novaLista.push(tarefa);
    localStorage.setItem("lista", JSON.stringify(novaLista));
}

document.querySelector("#adicionar").addEventListener("click", () => {
    adicionaTarefaTela();
});

function adicionaTarefaTela(tarefa)
{

    let newId = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    let novoItem = {
        id: newId,
        isConcluido: false,
        titulo: '',
        descricao: '',
    };

    if (tarefa != null) {
        novoItem.titulo = tarefa.titulo;
        novoItem.descricao = tarefa.descricao;
        novoItem.isConcluido = tarefa.isConcluido;        
    }
    
    let elemento = document.createElement("div");
    elemento.classList.add("d-flex", "w-100");
    elemento.innerHTML = getTemplateTarefa("criar", novoItem);
    
    document.querySelector(".lista").appendChild(elemento);
}

function salvarItem(id)
{   
    let novoItem = {
        id: id,
        isConcluido: false
    };

    novoItem.titulo = document.querySelector(`#${id} .titulo`).value;
    novoItem.descricao = document.querySelector(`#${id} .descricao`).value;

    setTarefa(novoItem);

    /* lista.forEach(objeto =>{
            if(objeto.id === id){
                lista.titulo = document.querySelector(`#${objetonovo.id}.titulo`).value;
                lista.descricao = document.querySelector(`#${objetonovo.id}.descricao`).value;
                setTarefa(lista);
            };
        }
    ); */

    
}

function editarItem()
{
   
}

function excluirItem()
{
    
}

function getTemplateTarefa(fluxo, objeto) 
{
    return `
    <div class="botoes-ordenacao d-flex flex-column justify-content-center align-items-center col-1 mb-2">
        <i class="bi bi-arrow-up-circle-fill" style="font-size:2rem;" onclick="moverCima(${objeto.id})" role="button"></i>
        <i class="bi bi-arrow-down-circle-fill" style="font-size:2rem;" onclick="moverBaixo(${objeto.id})" role="button"></i>
    </div>

    <div class="item-tarefa col-11 p-1 mb-2"> 
        <div class="contTarefa row p-1">
            <h3>
                Tarefa ${autoIncrement + 1}
            </h3>
        </div>     

        <div class="titulo p-1">
            <input type="text" class="w-100 obrigatorio" value="${getListaTarefas()[objeto.id] ? getListaTarefas()[objeto.id].titulo : ''}">
        </div>   

        <div class="descricao p-1">
            <textarea class="w-100 obrigatorio">${getListaTarefas()[objeto.id] ? getListaTarefas()[objeto.id].descricao : ''}</textarea>
        </div>

        <div class="botoes-acao d-flex justify-content-end">

            ${
                fluxo == "editar" 
                ? 
                `
                    <i class="bi bi-pencil-square fs-5 me-2 text-primary" role="button" onclick="editarItem(${objeto.id})"></i>
                `
                :
                `
                    <i class="bi bi-floppy2-fill fs-5 me-2 text-primary" role="button" onclick="salvarItem(${objeto.id})"></i>
                `
            }

            <i class="bi bi-trash3-fill fs-5 text-danger" role="button" onclick="excluirItem(${objeto.id})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </div>  

    </div>
    `;

}