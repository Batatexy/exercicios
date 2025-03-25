const possivelUsuario = JSON.parse(sessionStorage.getItem("usuario")) || [];
//validarUsuario(true, possivelUsuario[0], possivelUsuario[1]);

document.getElementById("nome-usuario").focus();

document.getElementById("botao-enviar").addEventListener("click", () => 
{
    validarUsuario(false, document.getElementById("nome-usuario").value, document.getElementById("senha-usuario").value);
});

function validarUsuario (primeiroLogin, nomeUsuario,senhaUsuario)
{
    fetch("usuarios.json")
    .then((response) => response.json())
    .then((usuarios) => 
    {
        let validacao = false;

        usuarios.users.forEach((usuario) => 
        {
            if (nomeUsuario == usuario.username && senhaUsuario == usuario.password)
            {
                validacao = true;
                sessionStorage.setItem("usuario", JSON.stringify([usuario.username, usuario.password]));
                
                window.location.href = "index_formulario_steam.html";
            }
        });

        if (!primeiroLogin)
        {
            if (validacao === false)
            {
                document.getElementById("erro-login").textContent = "Usuário Invalido"
            }
        }
    })
    .catch((error) => console.error("Erro ao carregar usuario:", error));
}

//Chat GPT que fez:
// Evento de pressionamento da tecla "Enter" no campo de email
document.getElementById('nome-usuario').addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter')
    {
        e.preventDefault();  // Impede o envio do formulário

        if (document.getElementById("senha-usuario").value != "")
        {
            validarUsuario(false, document.getElementById("nome-usuario").value, document.getElementById("senha-usuario").value);
        }
        else
        {
            if ( document.getElementById("nome-usuario").value != "")
            {
                document.getElementById("senha-usuario").focus();  // Move o foco para o campo senha
            }
        }
    } 
});

// Evento de pressionamento da tecla "Enter" no campo de senha
document.getElementById("senha-usuario").addEventListener('keydown', (e) => 
{
    if (e.key === 'Enter') 
    {
        e.preventDefault();  // Impede o envio do formulário

        if (document.getElementById("senha-usuario").value != "")
        {
            validarUsuario(false, document.getElementById("nome-usuario").value, document.getElementById("senha-usuario").value);
        }
    }
});