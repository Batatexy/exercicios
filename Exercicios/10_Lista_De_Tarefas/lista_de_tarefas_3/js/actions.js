import { getListaTarefas, setTarefa, getContador, setContador, } from "./gettersAndSetters.js";
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
        }
    });

    //Verificação de campos vazios, se não estiverem, continua
    if (!camposVazios)
    {
        //Puxar valores digitados nos campos
        let novoObjeto = 
        {
            id: objeto.id,

            titulo: itemHTML.querySelector(".titulo input").value,
            descricao: itemHTML.querySelector(".descricao textarea").value,

            fluxo: objeto.fluxo,
            isConcluido: objeto.isConcluido,
        };

        let lista = getListaTarefas();

        //Se o objeto estiver sendo salvo pela primeira vez
        if (novoObjeto.fluxo == "criar")
        {
            //Dar append em uma nova tarefa
            novoObjeto.fluxo = "salvar";
            lista.push(novoObjeto);

            //Pegar o numero do contador anterior e somar 1
            setContador(getContador() + 1);
        }
        else
        {
            novoObjeto.fluxo = "salvar";
            lista[novoObjeto.id] = novoObjeto;
        }

        //Salvar alterações no local storage
        setTarefa(lista);

        //Excluir certos conteudos do item
        itemHTML.querySelector(".titulo").remove();
        itemHTML.querySelector(".descricao").remove();
        itemHTML.querySelector(".botoes-acao").remove();

        //Adicionar novo titulo, descrição e botoes
        itemHTML.appendChild(getTemplateTitulo(novoObjeto));
        itemHTML.appendChild(getTemplateDescricao(novoObjeto));
        itemHTML.appendChild(getTemplateBotoes(novoObjeto));
    }
}

export function editarItem(objeto)
{
    objeto.fluxo = "editar";

    //Encontrar o item em especifico, baseado em seu id
    let itemHTML = document.getElementById(objeto.id);

    itemHTML.querySelector(".titulo").remove();
    itemHTML.querySelector(".descricao").remove();
    itemHTML.querySelector(".botoes-acao").remove();

    //Adicionar novo titulo, descrição e botoes
    itemHTML.appendChild(getTemplateTitulo(objeto));
    itemHTML.appendChild(getTemplateDescricao(objeto));
    itemHTML.appendChild(getTemplateBotoes(objeto));
}

export function excluirItem(objeto)
{
    
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

export function moverBaixo(id)
{
    console.log("Mover Baixo");

    if (lista[id].status == "aplicado")
    {
        console.log("item clickado, status: aplicado")
        for (let i = id+1; i < lista.length; i++)
        {
            console.log(i)
            if (lista[i] != null && lista[i].status == "aplicado")
            {
                let itemDeBaixo = lista[i];
        
                console.log("Antes da Troca")
                console.log(itemDeBaixo)
                console.log(lista[id])
        
                lista[i]=lista[id];
                lista[id] = itemDeBaixo;
                
                let htmlDeCima = document.getElementById(i);
                htmlDeCima.innerHTML = montarItem("aplicar", i );
        
                let itemHtml = document.getElementById(id);
                itemHtml.innerHTML = montarItem("aplicar", id );
        
                console.clear();
                console.log(lista);
    
                break;
            }
        }
    }

    console.log("item clickado, status: diferente de aplicado")
}