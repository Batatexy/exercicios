import { getListaTarefas, setTarefa, getContador, setContador, } from "./gettersAndSetters.js";
import { moverBaixo, moverCima, salvarItem, excluirItem, editarItem, removerClasseCampoVazio } from "./actions.js";

export function getTemplateTarefa(objeto, numeroTarefa) 
{
    let divPai = document.createElement("div");
    divPai.classList.add("d-flex", "w-100");

        //Div dos botões laterais de ordenação:
        let divBotoesOrdenacao = document.createElement("div")
        divBotoesOrdenacao.classList.add("botoes-ordenacao", "d-flex", "flex-column", "justify-content-center", "align-items-center", "col-1", "mb-2");

            let botaoCima = document.createElement("i");
            botaoCima.classList.add("botoes-ordenacao", "bi", "bi-arrow-up-circle-fill");
            botaoCima.addEventListener("click", () => 
            {
                moverCima(objeto.id);
            });

            let botaoBaixo = document.createElement("i");
            botaoBaixo.classList.add("botoes-ordenacao", "bi", "bi-arrow-down-circle-fill");
            botaoBaixo.addEventListener("click", () => 
            {
                moverBaixo(objeto.id);
            });

        divBotoesOrdenacao.appendChild(botaoCima);
        divBotoesOrdenacao.appendChild(botaoBaixo);

        //Div do item:
        let divItemTarefa = document.createElement("div");
        divItemTarefa.classList.add("item-tarefa", "col-11", "p-1", "mb-2");
        //Mudar para data-id
        divItemTarefa.id = objeto.id;

            let divContadorTarefa = document.createElement("div");
            divContadorTarefa.classList.add("contador-tarefa", "row", "p-1");

                let h3Tarefa = document.createElement("h3");
                h3Tarefa.textContent = "Tarefa de ID: "+ objeto.id;

            divContadorTarefa.appendChild(h3Tarefa)

            let divTitulo = getTemplateTitulo(objeto);
            let divDescricao = getTemplateDescricao(objeto);
            let divBotoes = getTemplateBotoes(objeto);

        divItemTarefa.appendChild(divContadorTarefa);
        divItemTarefa.appendChild(divTitulo);
        divItemTarefa.appendChild(divDescricao);
        divItemTarefa.appendChild(divBotoes);

    divPai.appendChild(divBotoesOrdenacao);
    divPai.appendChild(divItemTarefa);

    return divPai;
}


export function getTemplateTitulo(objeto)
{
    let divTitulo = document.createElement("div");
    divTitulo.classList.add("titulo", "p-1");

        let titulo;
        
        if (objeto.fluxo == "salvar")
        {
            titulo = document.createElement("h3");
            titulo.textContent = objeto.titulo;
        }
        else
        {
            titulo = document.createElement("input");
            titulo.type = "text";
            titulo.placeholder = "Digite um Título";
            titulo.value = objeto.titulo;
            titulo.addEventListener("click", () => 
            {
                removerClasseCampoVazio(titulo);
            });
        }

        titulo.classList.add("w-100", "obrigatorio");

    divTitulo.appendChild(titulo);

    return divTitulo;
}

export function getTemplateDescricao(objeto)
{
    let divDescricao = document.createElement("div");
    divDescricao.classList.add("descricao", "p-1");

        let descricao;
        
        if (objeto.fluxo == "salvar")
        {
            descricao = document.createElement("p");
        }
        else
        {
            descricao = document.createElement("textarea");
            descricao.placeholder = "Digite uma Descrição";
            descricao.addEventListener("click", () => 
            {
                removerClasseCampoVazio(descricao);
            });
            
        }

    descricao.textContent = objeto.descricao;
    descricao.classList.add("w-100", "obrigatorio");

    divDescricao.appendChild(descricao);

    return divDescricao;
}

export function getTemplateBotoes(objeto)
{
    let divBotoes = document.createElement("div");
    divBotoes.classList.add("botoes-acao", "d-flex", "justify-content-end");

        let botaoEditarSalvar;
        botaoEditarSalvar = document.createElement("i");
        //Verificar
        botaoEditarSalvar.role = "button";
        
        if (objeto.fluxo == "salvar")
        {
            botaoEditarSalvar.classList.add("editar", "bi", "bi-pencil-square", "fs-5", "me-2", "text-primary");
            botaoEditarSalvar.addEventListener("click", () => 
            {
                editarItem(objeto);
            });
        }
        else
        {
            botaoEditarSalvar.classList.add("salvar", "bi","bi-floppy2-fill", "fs-5", "me-2", "text-primary");
            botaoEditarSalvar.addEventListener("click", () => 
            {
                salvarItem(objeto);
            });
        }

        let botaoExcluir = document.createElement("i");
        botaoExcluir.classList.add("excluir", "bi", "bi-trash3-fill", "fs-5", "text-danger");
        //Verificar
        botaoExcluir.role = "button";
        botaoExcluir.setAttribute("data-bs-toggle","modal")
        botaoExcluir.setAttribute("data-bs-target","#exampleModal")

        botaoExcluir.addEventListener("click", () => 
        {
            excluirItem(objeto);
        });

    divBotoes.appendChild(botaoEditarSalvar);
    divBotoes.appendChild(botaoExcluir);

    return divBotoes;
}



