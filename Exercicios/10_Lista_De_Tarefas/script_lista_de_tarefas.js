var titulo = "";
var descricao = "";

const htmlBlocos = document.querySelector(".blocos");
document.querySelector("#adicionar svg").addEventListener("click", () =>
{
    //Criar e colocar classes na tag li
    const elementoNovo = document.createElement("li");
    elementoNovo.className = "cartao";

    //Coloca dentro de li
    elementoNovo.innerHTML = 
    `
      <div class="d-flex flex-column">
          <textarea class="text-center text-capitalize titulo"></textarea>
          <textarea class="descricao"></textarea>
      </div>
        
      <div class="opcoes d-flex flex-row">
        <button class="excluir">Excluir</button>
        <button class="aplicar">Aplicar</button>
      </div>
    `;

    //Então adiciona à lista htmlBlocos
    htmlBlocos.appendChild(elementoNovo);
    console.clear()



    //Sempre que um novo cartão é adicionada, redefine essa espécie de "matriz"
    //document.querySelectorAll(".cartao").querySelectorAll(".exluir")
    let htmlCartao = document.querySelectorAll(".cartao")
    htmlCartao.forEach(function (i) 
    {
        console.log(i)

        let htmlExcluir = i.querySelectorAll(".excluir")
        htmlExcluir.forEach(function (j) 
        {
            j.addEventListener("click", function () 
            {
                console.log(j)
                //Excluir o cartão inteiro
                i.remove();
            });
        });
    });

    //Aplicar e Editar
    htmlCartao.forEach(function (i) 
    {
        let hmtlAplicar = i.querySelectorAll(".aplicar")
        let hmtlEditar = i.querySelectorAll(".editar")

        //Aplicar
        hmtlAplicar.forEach(function (j)
        {
          j.addEventListener("click", function () 
          {
            titulo = "";
            descricao = "";
            
            i.querySelectorAll(".titulo").forEach(function (k) 
            {
              titulo = k.value;
            });

            i.querySelectorAll(".descricao").forEach(function (l) 
            {
              descricao = l.value;
            });

            alteracao = 
            `
              <div class="d-flex flex-column">
                  <h3 class="text-center text-capitalize titulo">${titulo}</h3>
                  <p class="descricao">${descricao}</p>
              </div>
                
              <div class="opcoes d-flex flex-row">
                  <button class="editar">Editar</button>
              </div>
            `;

            i.innerHTML = alteracao
          });
        });
        


        //Editar
        hmtlEditar.forEach(function (m)
        {
          m.addEventListener("click", function () 
          {
            titulo = "";
            descricao = "";
            
            i.querySelectorAll(".titulo").forEach(function (n) 
            {
              titulo = n.textContent;
            });

            i.querySelectorAll(".descricao").forEach(function (o) 
            {
              descricao = o.textContent;
            });

            alteracao = 
            `
              <div class="d-flex flex-column">
                  <textarea class="text-center text-capitalize titulo">${titulo}</textarea>
                  <textarea class="descricao">${descricao}</textarea>
              </div>
                
              <div class="opcoes d-flex flex-row">
                  <button class="excluir">Excluir</button>
                  <button class="aplicar">Aplicar</button>
              </div>
            `;

            i.innerHTML = alteracao
          });
        });




    });


});






