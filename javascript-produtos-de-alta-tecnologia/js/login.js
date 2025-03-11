import { goToPage, mudarNumeroItensCarrinho, validarUsuario } from "./utlis.js";
import { createNavBar } from "./getTemplates.js";
import { getUsuario } from "./gettersAndSetters.js";

//Criar o Nav Dinamicamente
document.querySelector("div").append(createNavBar());

//Clickar no carrinho te leva para sua página
document.getElementById("carrinho").addEventListener("click", () => 
{
   goToPage("carrinho.html");
})

//Função para atualizar o número de itens na lista ao lado do botão do carrinho
mudarNumeroItensCarrinho();

const possivelUsuario = getUsuario();
validarUsuario(true, possivelUsuario[1], possivelUsuario[2]);
document.getElementById("nome-usuario").focus();

document.getElementById("botao-enviar").addEventListener("click", () => 
{
    validarUsuario(false, document.getElementById("nome-usuario").value, document.getElementById("senha-usuario").value);
});



document.getElementById('nome-usuario').addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter')
    {
        e.preventDefault();

        if (document.getElementById("senha-usuario").value != "")
        {
            validarUsuario(false, document.getElementById("nome-usuario").value, document.getElementById("senha-usuario").value);
        }
        else
        {
            if ( document.getElementById("nome-usuario").value != "")
            {
                document.getElementById("senha-usuario").focus();
            }
        }
    } 
});

document.getElementById("senha-usuario").addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter') 
    {
        e.preventDefault();

        if (document.getElementById("senha-usuario").value != "")
        {
            validarUsuario(false, document.getElementById("nome-usuario").value, document.getElementById("senha-usuario").value);
        }
    }
});
