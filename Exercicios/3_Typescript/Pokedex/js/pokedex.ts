function carregarTodosPokemons()
{
    getAPI("https://pokeapi.co/api/v2/pokemon").then(pokemon =>
    {
        for(let i = 1; i <= 1026; i++) //pokemon.count
        {
            criarCardPokemon(i)
        }
    }
}

function criarCardPokemon(valor: string | number)
{
    console.clear();
    let pokemonHTML;

    //Procurar pela informações do Pokemon
    getAPI(`https://pokeapi.co/api/v2/pokemon/${valor}`).then(pokemon =>
    {
        let escolha: number = 1;
        if (pokemon.id == escolha) console.log(pokemon);
        //Uma dessa informações é as formas dele, é preciso entrar em outra URL para pegar a imagem
        getAPI(pokemon.forms[0].url).then(forms => 
        {
            if (pokemon.id == escolha) console.log(forms);

            pokemonHTML = document.createElement("img");
            pokemonHTML.src =  forms.sprites.front_default;
            pokemonHTML.className = "pokemon-imagem";
            pokemonHTML.role = "button";
            pokemonHTML.addEventListener("click", () =>
            {
                goToPage("")
            });

            pokemons.appendChild(pokemonHTML);
        });
    })
    .catch((error) => 
    {
        pokemonHTML = document.createElement("p");
        pokemonHTML.textContent =  "Este Pokemon não existe";
        //pokemons.appendChild(pokemonHTML);

        console.error(error);
    })
}

async function getAPI(item: string)
{
    return await fetch(item)
    .then(response => {return response.json()})
    .then(item => 
    {
        return item;
    })
}

function goToPage(page: string)
{
    window.location.href = page;
}

carregarTodosPokemons();

let pokemons = document.getElementById("pokemons");
let input = document.getElementById("pesquisar-pokemon");

input?.addEventListener("keydown", (event) =>
{
    if (event.key === "Enter") 
    {   
        if (input.value)
        {
            pokemons.innerHTML = "";

            criarCardPokemon(input.value);
            input.value = "";
        }
        else
        {
            pokemons.innerHTML = "";
            carregarTodosPokemons();
        }
    }
})