import { getListaTarefas, setListaTarefas, getContador, setContador } from "./gettersAndSetters.js";
import { getTemplateTarefa } from "./templates.js";

atualizarTarefasTela();

function atualizarTarefasTela() 
{
    getListaTarefas().forEach(tarefa => 
    {
        adicionaTarefaTela(tarefa);
    });
}

document.querySelector("#adicionar").addEventListener("click", () => 
{
    adicionaTarefaTela();
});

function adicionaTarefaTela(tarefa)
{
    let numeroTarefa = 0;
    let objeto;

    if (tarefa == null)
    {
        //Criar um novo objeto vazio, com fluxo de criar
        objeto = 
        {
            id: getContador(),
            
            titulo: '',
            descricao: '',

            fluxo: "criar",
            isConcluido: false,
        };
    }
    else
    {
        objeto = tarefa;
    }

    //Dar append na lista no HTML, o conteudo será o retorno da função de template
    document.querySelector(".lista").appendChild(getTemplateTarefa(objeto, numeroTarefa));
}


































