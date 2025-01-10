export function setProjetos(projetos)
{
    localStorage.setItem("projetos", JSON.stringify(projetos));
}

//Se existir, puxar a lista do localStorage, senão puxa uma lista vazia
export function getProjetos()
{
    return JSON.parse(localStorage.getItem("projetos")) || [];
}

export function goToPage(page) 
{
   window.location.href = page;
}

if (document.getElementById("criar-projeto") != null)
{
    document.getElementById("criar-projeto").addEventListener("click", () => 
    {
        goToPage(`cadastro_projeto.html`)
    });
}

criarCards();
function criarCards()
{
    let projetos = getProjetos();

    projetos.forEach(item => 
    {
        //Se precisar remover sem usar sliced, mudar aqui
        if (document.querySelector(".projetos") != null && item.status == "ativo")
        {
            document.querySelector(".projetos").appendChild(criarItem(item));
        }
    });
}

function criarItem(objeto)
{
    if (objeto.imagem == "")
    {
        objeto.imagem = "images/sem_imagem.png"
    }

    let item = document.createElement("div")
    item.className = "card";
    item.id="item-" + objeto.id;

        let imagem = document.createElement("img")
        imagem.src = objeto.imagem;

        let h5 = document.createElement("h5")
        h5.className = "card-title";
        h5.textContent = objeto.nome

        let p = document.createElement("p")
        p.className = "card-text";
        p.textContent = objeto.descricao

        let divBotoes = document.createElement("div")
        divBotoes.className = "d-flex"

            let botaoEditar = document.createElement("button")
            botaoEditar.className = "btn btn-primary editar-projeto";
            botaoEditar.textContent = "Editar o Projeto"
            botaoEditar.addEventListener("click", () => 
            {
                goToPage(`cadastro_projeto.html?id=${objeto.id}`);
            })

            let botaoExcluir = document.createElement("button")
            botaoExcluir.className = "btn btn-danger excluir-projeto";
            botaoExcluir.textContent = "Excluir o Projeto"
            botaoExcluir.addEventListener("click", () => 
            {
                excluirItem(objeto);
            })

        divBotoes.appendChild(botaoEditar);
        divBotoes.appendChild(botaoExcluir);

    item.appendChild(imagem);
    item.appendChild(h5);
    item.appendChild(p);
    item.appendChild(divBotoes);


    return item
}

function excluirItem(objeto)
{
    if (confirm("Deseja excluir o projeto " + objeto.nome + "?")) 
    {
        let projetos = getProjetos()

        projetos.forEach((item, index) => 
        {
            if (item.id == objeto.id)
            {
                document.getElementById("item-" + item.id).remove();

                //Se precisar remover sem usar sliced, mudar aqui
                item.status = "excluido";
                projetos[index] = item;

                setProjetos(projetos);
            }
        });
    } 
}




