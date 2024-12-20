const botaoCheck = `<i class="bi bi-square"></i>`
const botaoCheckPressed = `<i class="bi bi-check-square-fill"></i>`
const botaoAplicar = `<button class="aplicar" onclick="aplicar(${elementoNovo})"><i class="bi bi-check2-square" style="font-size:1.2rem; position:relative; top:1px;"></i></button>`
const botaoEditar = `<button class="editar" onclick="editar()"><i class="bi bi-pencil-square"></i></button>`
const botaoExcluir = `<button class="excluir" id="${lista.length}" onclick="excluir(${lista.length})"><i class="bi bi-x-square"></i></button>`

let lista = []
document.querySelector("#adicionar svg").addEventListener("click", () =>
{
    var elementoNovo = document.createElement("div");
    elementoNovo.className = "item d-flex flex-column";
    elementoNovo.innerHTML = 
    `
        <div class="d-flex justify-content-between">
            <div class="numero-tarefa">
                Tarefa ${lista.length + 1}
            </div>

            <div class="botoes">
                ${botaoAplicar}
                ${botaoExcluir}
            </div>
        </div>

        <div class="d-flex flex-column"> 
            <div class="titulo">
                <input type="text" onclick="resetInputTextarea()">
            </div>
            
            <div class="descricao">
                <textarea onclick="resetInputTextarea()"></textarea>
            </div>
        </div>
    `;

    //Cria um objeto
    let novoItem =
    {
        id: lista.length,
        titulo: "",
        descricao: "",
        elementoNovo: elementoNovo,
    };

    //Então adiciona à lista
    lista.push(novoItem);

    console.clear();
    console.log(lista);

    //Cria o elemento div
    document.querySelector(".lista").appendChild(elementoNovo);
    item = document.querySelectorAll(".item")
});

function aplicar()
{
    document.querySelectorAll(".item").forEach((itemElement, itemIndex) =>
    {
        itemElement.querySelectorAll(".aplicar").forEach(() =>
        {
            let titulo = "";
            let descricao = "";
    
            let tituloValue = "";
            let descricaoValue = "";
            
            itemElement.querySelectorAll(".titulo input").forEach((inputElement) =>
            {
                tituloValue = inputElement.value;
                console.log(tituloValue);
            });
    
            itemElement.querySelectorAll(".descricao textarea").forEach((textareaElement) =>
            {
                descricao = textareaElement;
                descricaoValue = textareaElement.value;
            });
    
            //Se o campo estiver vazio
            if (tituloValue == "" || descricaoValue == "")
            {
                console.log("campo vazio");
    
                if (tituloValue == "")
                {
                    titulo.className = "campo-vazio"
                }
    
                if (descricaoValue == "")
                {
                    descricao.className = "campo-vazio"
                }
            }
            else
            {
                lista[itemIndex].titulo = tituloValue;
                lista[itemIndex].descricao = descricaoValue;
    
                console.clear()
                console.log(lista);
    
                elementoNovo.innerHTML = 
                `
                <div class="d-flex flex-column"> 
                    <div class="d-flex justify-content-between">
                        <div class="d-flex check-div">
                        <button class="check">
                            ${botaoCheck}
                        </button>
                            <div class="titulo">
                                <h4>${lista[itemIndex].titulo}</h4>
                            </div>
                        </div>
            
                        <div>
                            ${botaoEditar}
                            ${botaoExcluir}
                        </div>
                    </div>
                    
                    <div class="descricao">
                        <p>${lista[itemIndex].descricao}</p>
                    </div>
                </div>
                `;
            }
        });
    });
}


//Textarea quando clicada volta ao normal
function resetInputTextarea()
{
    document.querySelectorAll("textarea").forEach((textareaElement) =>
    {
        textareaElement.className = "";
    });
}



function exluir(id)
{
    document.getElementById(id)
    {
        let comfirmar = confirm('Apagar tarefa?')
        if (comfirmar == true)
        {
            //Excluir o item inteiro
            i.remove();

            console.clear()
            console.log(lista);
        }

        atualizar(elementoNovo);
    }
}













/* 


function atualizar(elementoNovo)
{
    

    document.querySelectorAll(".item").forEach((i) =>
    {
        let htmlAplicar = i.querySelectorAll(".aplicar")
        htmlAplicar.forEach((j, itemIndex) =>
        {
            //i= Item --> j= Botão --> k= TextArea
            j.addEventListener("click", () =>
            {
                let titulo = "";
                let descricao = "";

                let tituloValue = "";
                let descricaoValue = "";
                
                i.querySelectorAll(".titulo textarea").forEach((k) =>
                {
                    titulo = k;
                    tituloValue = k.value
                });

                i.querySelectorAll(".descricao textarea").forEach((k) =>
                {
                    descricao = k;
                    descricaoValue = k.value;
                });

                //Se o campo estiver vazio
                if (tituloValue == "" || descricaoValue == "")
                {
                    console.log("nulo")

                    if (tituloValue == "")
                    {
                        titulo.className = "campo-vazio"
                    }

                    if (descricaoValue == "")
                    {
                        descricao.className = "campo-vazio"
                    }
                }
                else
                {
                    lista[itemIndex].titulo = tituloValue;
                    lista[itemIndex].descricao = descricaoValue;

                    console.clear()
                    console.log(lista);

                    elementoNovo.innerHTML = 
                    `
                    <div class="d-flex flex-column"> 
                        <div class="d-flex justify-content-between">
                            <div class="d-flex check-div">
                            <button class="check">
                                ${botaoCheck}
                            </button>
                                <div class="titulo">
                                    <h4>${lista[itemIndex].titulo}</h4>
                                </div>
                            </div>
                
                            <div>
                                ${botaoEditar}
                                ${botaoExcluir}
                            </div>
                        </div>
                        
                        <div class="descricao">
                            <p>${lista[itemIndex].descricao}</p>
                        </div>
                    </div>
                    `;
                }

                atualizar(elementoNovo);
            });
        });

        

        //Check
        let htmlCheck = i.querySelectorAll(".check")
        htmlCheck.forEach((j) =>
        {
            j.addEventListener("click", () =>
            {
                console.log(i.className)
                if (i.className == "item d-flex flex-column riscado")
                {
                    i.className = "item d-flex flex-column"
                    j.innerHTML = botaoCheck;
                }
                else
                {
                    i.className = "item d-flex flex-column riscado";
                    j.innerHTML = botaoCheckPressed;
                }
            });
        });

        //Editar
        let htmlEditar = i.querySelectorAll(".editar")
        htmlEditar.forEach((j, index) =>
        {
            j.addEventListener("click", () =>
            {
                elementoNovo.innerHTML = 
                `
                <div class="d-flex flex-column"> 
                    <div class="d-flex justify-content-between">
                        <div class="d-flex check-div">
                            <div class="titulo">
                                <textarea>${lista[itemIndex].titulo}</textarea>
                            </div>
                        </div>
            
                        <div>
                            ${botaoAplicar}
                            ${botaoExcluir}
                        </div>
                    </div>
                    
                    <div class="descricao">
                        <textarea>${lista[itemIndex].descricao}</textarea>
                    </div>
                </div>
                `;

                atualizar(elementoNovo);
            });
        });
    });
} 
    

*/