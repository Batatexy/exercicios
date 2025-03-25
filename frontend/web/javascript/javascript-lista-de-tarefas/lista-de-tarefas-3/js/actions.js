import { getListaTarefas, setListaTarefas, getContador, setContador, } from "./gettersAndSetters.js";
import { getTemplateTarefa, getTemplateDescricao, getTemplateTitulo, getTemplateBotoes } from "./templates.js";

//Quando um campo estiver com a classe de aviso-campo-vazio e for clicado, a classe é removida
export function removerClasseCampoVazio(elemento)
{
    elemento.classList.remove("aviso-campo-vazio")
}

export function salvarItem(objeto)
{
    //Encontrar o item em especifico, baseado em seu id
    let itemHTML = document.getElementById(objeto.id);
    let camposVazios = false;

    //Verificar todos os campos obrigatorios
    itemHTML.querySelectorAll(".obrigatorio").forEach(campo =>
    {
        if (campo.value == "")
        {
            //Salvar um status de que algum dos campos está vazio, return aqui não funcionou, não sei por que
            camposVazios = true;

            //Mudar classe do input ou textarea, avisando que precisa ser preenchido
            campo.className += " aviso-campo-vazio"

            return;
        }
    });

    //Verificação de campos vazios, se não estiverem, continua
    if (!camposVazios)
    {
        //Puxar valores digitados nos campos
        objeto.titulo = itemHTML.querySelector(".titulo input").value;
        objeto.descricao = itemHTML.querySelector(".descricao textarea").value;

        let lista = getListaTarefas();

        //Se o objeto estiver sendo salvo pela primeira vez
        if (objeto.fluxo == "criar")
        {
            //Dar append em uma nova tarefa
            objeto.fluxo = "salvar";
            lista.push(objeto);

            //Pegar o numero do contador anterior e somar 1
            setContador(getContador() + 1);
        }
        else
        {
            objeto.fluxo = "salvar";
            lista[objeto.id] = objeto;
        }

        //Salvar alterações no local storage
        setListaTarefas(lista);

        recarregarConteudoItem(itemHTML, objeto)
    }
}

export function editarItem(objeto)
{
    objeto.fluxo = "editar";

    //Encontrar o item em especifico, baseado em seu id
    let itemHTML = document.getElementById(objeto.id);

    recarregarConteudoItem(itemHTML, objeto)
}

export function confirmarExcluirItem(objeto)
{
    let botaoModalExcluir = document.getElementById("confirmar-excluir-item");
    botaoModalExcluir.addEventListener("click", () => 
    {
        excluirItem(objeto)
    });
}

export function excluirItem(objeto)
{
    let itemHTML = document.getElementById(objeto.id)
    itemHTML.remove();
    console.log(itemHTML.previousElementSibling)

    let lista = getListaTarefas();
    
    //Alterar
    lista[objeto.id].fluxo = "excluir";

    setListaTarefas(lista);
}






function recarregarConteudoItem(itemHTML, objeto)
{
    //Excluir certos conteudos do item
    itemHTML.querySelector(".titulo").remove();
    itemHTML.querySelector(".descricao").remove();
    itemHTML.querySelector(".botoes-acao").remove();

    //Adicionar novo titulo, descrição e botoes
    itemHTML.appendChild(getTemplateTitulo(objeto));
    itemHTML.appendChild(getTemplateDescricao(objeto));
    itemHTML.appendChild(getTemplateBotoes(objeto));
}












//Check
export function check(id)
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

export function moverCima(id)
{

}

export function moverBaixo(objeto)
{
    let lista = getListaTarefas();
    let indexObjetoLista;
    lista.forEach((tarefa, index) => {
        if (index)
        {
            console.log(index)
        }
    });

    

    for (let i = objeto.id + 1; i < lista.length; i++)
    {
        if (lista[i].fluxo == "aplicar" && lista[i] != null)
        {
            let itemDeBaixo = lista[objeto.id+1];

        lista[objeto.id + 1] = lista[objeto.id];
        lista[objeto.id] = itemDeBaixo;

        setListaTarefas(lista);
        
        let itemHTML = document.getElementById(lista[objeto.id]);
        let itemHTMLBaixo = document.getElementById(lista[objeto.id+1]);
        
        recarregarConteudoItem(itemHTML, lista[objeto.id])
        recarregarConteudoItem(itemHTMLBaixo, lista[objeto.id+1])
        }
    }
}