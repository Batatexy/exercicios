//Variaveis de icones de botões:
const botaoCheck = `<i class="bi bi-square"></i>`
const botaoCheckPressed = `<i class="bi bi-check-square-fill"></i>`
const botaoAplicar = `<i class="bi bi-check2-square" style="font-size:1.2rem; position:relative; top:1px;"></i>`
const botaoEditar = `<i class="bi bi-pencil-square"></i>`
const botaoExcluir = `<i class="bi bi-x-square"></i>`

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
    let listaTarefas = [];
    if (localStorage.getItem("lista")) {
        listaTarefas = localStorage.getItem("lista") ? JSON.parse(localStorage.getItem("lista")) : [];   
    } else {
        localStorage.setItem("lista", JSON.stringify([]));
    }
    return listaTarefas;
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
    var elementoNovo = document.createElement("div");
    elementoNovo.className = "item-fora";

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
        setTarefa(novoItem);
    }    

    elementoNovo.id = newId;
    elementoNovo.innerHTML = getTemplateTarefa("criar", newId);
    document.querySelector(".lista").appendChild(elementoNovo);

}

function getTemplateTarefa(fluxo, id) {
    return `   
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
                <div class="numero-tarefa">
                    Tarefa ${autoIncrement + 1}
                </div>
            </div>

            <div class="d-flex flex-column"> 
                <div class="titulo">
                    <input onclick="reset('input', ${id})" type="text" value="${getListaTarefas()[id] ? getListaTarefas()[id].titulo : ''}">
                </div>
                    
                <div class="descricao">
                    <textarea onclick="reset('textarea', ${id})">${getListaTarefas()[id] ? getListaTarefas()[id].descricao : ''}</textarea>
                </div>
            </div>

            <div class="botoes d-flex justify-content-end">

                ${fluxo == "editar" ?
                    `
                    1
                        <button class="editar" onclick="editar(${id})">
                                ${botaoEditar}
                        </button>
                    `
                    :
                    `
                    2
                        <button class="aplicar" onclick="aplicar(${id})">
                            ${botaoAplicar}
                        </button>
                    `
                }
                <button class="excluir" onclick="salvarIDClick(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    ${botaoExcluir}
                </button>           
            </div>
        </div>
    `;       
}






