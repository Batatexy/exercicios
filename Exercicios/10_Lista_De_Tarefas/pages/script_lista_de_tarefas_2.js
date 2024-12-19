const botaoExcluir = '<button class="excluir"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg></button>'
const botaoAplicar = '<button class="aplicar"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/><path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/></svg></button>'
const botaoCheck = '<button class="check"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg></button>'
const botaoEditar = '<button class="editar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg></button>'





let lista = []

//Criar Item

let hmtlLista = document.querySelector(".lista");
document.querySelector("#adicionar svg").addEventListener("click", () =>
{
    //Cria um objeto
    let novoItem =
    {
        titulo: "",
        descricao: "",
    };
    
    //Então adiciona à lista
    lista.push(novoItem);

    console.clear()
    console.log(lista);

    const elementoNovo = document.createElement("div");
    elementoNovo.className = "item d-flex flex-column";
    elementoNovo.innerHTML = 
    `
      <div class="d-flex flex-column"> 
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <div class="titulo">
                    <textarea></textarea>
                </div>
            </div>

            <div>
                ${botaoAplicar}
                ${botaoExcluir}
            </div>
        </div>
        
        <div class="descricao">
            <textarea></textarea>
        </div>
    </div>
    `;

    //Cria o elemento div
    hmtlLista.appendChild(elementoNovo);



    //Textarea quando clicada volta ao normal
    let htmlTextarea = document.querySelectorAll("textarea")
    htmlTextarea.forEach((i) =>
    {
        i.addEventListener("click", () =>
        {
            i.className = "";
        });
    });



    //Item
    let item = document.querySelectorAll(".item")
    item.forEach((i) =>
    {
        //Excluir
        let htmlExcluir = i.querySelectorAll(".excluir")
        htmlExcluir.forEach((j, index) =>
        {
            j.addEventListener("click", () =>
            {
                //Excluir o item inteiro
                lista.pop(index);
                i.remove();

                console.clear()
                console.log(lista);
            });
        });
        //Excluir end

        
        //Aplicar
        let htmlAplicar = i.querySelectorAll(".aplicar")
        htmlAplicar.forEach((j, index) =>
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
                    lista[index].titulo = tituloValue;
                    lista[index].descricao = descricaoValue;

                    console.clear()
                    console.log(lista);

                    elementoNovo.innerHTML = 
                    `
                    <div class="d-flex flex-column"> 
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                ${botaoCheck}
                                <div class="titulo">
                                    <h4>${lista[index].titulo}</h4>
                                </div>
                            </div>
                
                            <div>
                                ${botaoEditar}
                                ${botaoExcluir}
                            </div>
                        </div>
                        
                        <div class="descricao">
                            <p>${lista[index].descricao}</p>
                        </div>
                    </div>
                    `;

                    htmlCheck = i.querySelectorAll(".check");
                    resetarBotoes(i);
                }
            });
        });
        //Aplicar end

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
                        <div class="d-flex">
                            ${botaoCheck}
                            <div class="titulo">
                                <textarea></textarea>
                            </div>
                        </div>
            
                        <div>
                            ${botaoAplicar}
                            ${botaoExcluir}
                        </div>
                    </div>
                    
                    <div class="descricao">
                        <textarea></textarea>
                    </div>
                </div>
                `;
            });
        });
        //Editar end
    });
    
});

function resetarBotoes(i)
{
    item = document.querySelectorAll(".item")
    htmlExcluir = i.querySelectorAll(".excluir")
    htmlEditar = i.querySelectorAll(".editar")
    htmlAplicar = i.querySelectorAll(".aplicar")
    htmlCheck = i.querySelectorAll(".check")
    htmlTextarea = document.querySelectorAll("textarea")
}