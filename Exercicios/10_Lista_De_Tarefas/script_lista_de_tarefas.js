const joao = 
{
  nome: "João",
  idade: 12,
  materiasFavoritas: ["Matematica", "Portugues"],
  falar: (mensagem) => console.log(mensagem),
  amigo: 
  {
    nome: "Lucas",
    idade: 12,
  },
};

const pedro = 
{
  nome: "João",
  idade: 12,
  materiasFavoritas: ["Matematica", "Portugues"],
  falar: (mensagem) => console.log(mensagem),
  amigo: 
  {
    nome: "Lucas",
    idade: 12,
  },
};

const pessoas = 
[
  joao,
  pedro,
  {
    nome: "Maria",
    idade: 12,
    materiasFavoritas: ["Matematica", "Portugues"],
    falar: (mensagem) => console.log(mensagem),
    amigo: 
    {
      nome: "Lucas",
      idade: 12,
    },
  },
];

const prop = "amigo"

const lista = 
{
    bloco1: 
    {
        titulo: "Titulo 1",
        descricao: "Descrição 1",
        editar: () => console.log(mensagem),
        aplicar: () => console.log(mensagem),
        remover: () => console.log(mensagem),
    },

    bloco2: 
    {
        titulo: "Titulo 2",
        descricao: "Descrição 2",
        editar: () => console.log(mensagem),
        aplicar: () => console.log(mensagem),
        remover: () => console.log(mensagem),
    },
};

const htmlBlocos = document.querySelector(".blocos");
document.querySelector("#adicionar svg").addEventListener("click", () =>
{
    //Criar e colocar classes na tag li
    const elementoNovo = document.createElement("li");
    elementoNovo.className = "cartao d-flex flex-column";

    //Coloca dentro de li
    elementoNovo.innerHTML = 
    `
        <textarea class="text-center text-capitalize titulo"></textarea>
        
        <textarea class="descricao"></textarea>
        
        <div class="opcoes d-flex flex-row">
        <button class="editar">Editar</button>

        <button class="excluir">Excluir</button>
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
});






