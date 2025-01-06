import { getListaTarefas, setTarefa, getContador, setContador } from "./gettersAndSetters.js";
import { getTemplateTarefa } from "./templates.js";

let numeroTarefa = 0;

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
    //Criar um novo objeto vazio, com fluxo de criar
    let objeto = 
    {
        id: getContador(),
        
        titulo: '',
        descricao: '',

        fluxo: "criar",
        isConcluido: false,
    };

    //Verificar se foi passado algum valor no parametro e atribuir à esse objeto
    if (tarefa != null) 
    {
        objeto.id = tarefa.id;

        objeto.titulo = tarefa.titulo;
        objeto.descricao = tarefa.descricao;

        objeto.fluxo = tarefa.fluxo;
        objeto.isConcluido = tarefa.isConcluido;
    };
    
    //Dar append na lista no HTML, o conteudo será o retorno da função de template
    document.querySelector(".lista").appendChild(getTemplateTarefa(objeto, numeroTarefa));
}


































