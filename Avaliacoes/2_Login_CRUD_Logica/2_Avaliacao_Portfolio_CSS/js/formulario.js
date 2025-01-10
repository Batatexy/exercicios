import { getProjetos, setProjetos, goToPage } from "./index.js";

document.querySelector("main").appendChild(criarFormulario(pegarObjeto()));

function pegarObjeto()
{
    let id = parseInt(new URLSearchParams(window.location.search).get("id"))
    let projetos = getProjetos()
    let objeto;

    projetos.forEach((item) => 
    {
        if (item.id == id)
        {
            objeto = item;
        }
    });

    return objeto;
}

function criarFormulario(objeto)
{
    let divPai = document.createElement("div");
    divPai.className = "container-fluid formulario-projeto flex-center";

        let divFlex = document.createElement("div");
        divFlex.className = "d-flex justify-content-center";

            let formulario = document.createElement("div");
            formulario.className = "formulario";

                let nome = document.createElement("div");
                nome.className = "form-group mb-3 campo-obrigatorio";

                    let labelNome = document.createElement("label")
                    labelNome.for = "nome-projeto";
                    labelNome.textContent = "Nome do Projeto:";

                    let inputNome = document.createElement("input");
                    inputNome.className = "form-control"
                    inputNome.id = "nome-projeto"
                    inputNome.type="text"
                    inputNome.placeholder="Digite o nome do Projeto"

                nome.appendChild(labelNome);
                
                let descricao = document.createElement("div");
                descricao.className = "form-group mb-3";

                    let labelDescricao = document.createElement("label")
                    labelDescricao.for = "descricao-projeto";
                    labelDescricao.textContent = "Descrição do Projeto:";

                    let inputDescricao = document.createElement("textarea");
                    inputDescricao.className = "form-control"
                    inputDescricao.rows="5"
                    inputDescricao.id = "descricao-projeto"
                    inputDescricao.placeholder ="Digite uma descrição do Projeto"
                    
                descricao.appendChild(labelDescricao);
                
                let imagem = document.createElement("div");
                imagem.className = "form-group mb-3";

                    let labelImagem = document.createElement("label")
                    labelImagem.for = "imagem-projeto";
                    labelImagem.textContent = "Imagem do Projeto:";

                    let inputImagem = document.createElement("input");
                    inputImagem.className = "form-control"
                    inputImagem.type = "text"
                    inputImagem.id = "imagem-projeto"
                    inputImagem.placeholder ="Digite uma URL de imagem válida"
                    
                imagem.appendChild(labelImagem);

                let botao = document.createElement("button");
                botao.className = "btn btn-primary mb-3"
                botao.id = "botao-criar"
                botao.type = "submit"
                botao.textContent = "Criar Projeto"
                botao.addEventListener("click", () => 
                {
                    salvarItem(objeto);
                })

                if (objeto)
                {
                    inputNome.value = objeto.nome;
                    inputDescricao.value = objeto.descricao;
                    inputImagem.value = objeto.imagem;
                    botao.textContent = "Salvar Projeto"
                }

                nome.appendChild(inputNome);
                descricao.appendChild(inputDescricao);
                imagem.appendChild(inputImagem);
             
            formulario.appendChild(nome);
            formulario.appendChild(descricao);
            formulario.appendChild(imagem);
            formulario.appendChild(botao);
        divFlex.appendChild(formulario);
    divPai.appendChild(divFlex)

    return divPai;
}

function salvarItem(objeto)
{
    if (verificarCampos())
    {
        let contador = JSON.parse(localStorage.getItem("contador")) || 0;
        let projetos = getProjetos()

        let novoItem = 
        {
            id: contador,
            nome: document.getElementById("nome-projeto").value,
            descricao: document.getElementById("descricao-projeto").value,
            imagem: document.getElementById("imagem-projeto").value,
            status: "ativo",
        }

        if (objeto)
        {
            novoItem.id = objeto.id

            projetos.forEach((item, index) => 
            {
                if (item.id == objeto.id)
                {
                    projetos[index] = novoItem;
                }
            });
        }
        else
        {
            contador++;
            localStorage.setItem("contador", JSON.stringify(contador));
            projetos.push(novoItem);
        }
        
        setProjetos(projetos);
        goToPage("index.html") 
    }
    else
    {
        let obrigatorio = document.querySelectorAll(".campo-obrigatorio")

        obrigatorio.forEach(campo => 
        {
            if (campo.querySelector("input"))
            {
                campo.querySelector("input").classList.add("aviso")
            }
            else
            {
                campo.querySelector("textarea").classList.add("aviso")
            }
        });
    }
}

function verificarCampos()
{
    let obrigatorio = document.querySelectorAll(".campo-obrigatorio");
    let validacao = true;
    
    obrigatorio.forEach(campo => 
    {
        if (campo.querySelector("input"))
        {
            if (campo.querySelector("input").value == "")
            {
                validacao = false;
            }
        }
        else
        {
            if (campo.querySelector("textarea").value == "")
            {
                validacao = false;
            }
        }
    });
    
    return validacao;
}
