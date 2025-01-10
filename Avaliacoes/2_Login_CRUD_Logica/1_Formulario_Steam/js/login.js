const possivelUsuario = JSON.parse(sessionStorage.getItem("usuario")) || [];
console.log(possivelUsuario)
validarUsuario(true, possivelUsuario[0], possivelUsuario[1]);

document.getElementById("botao-enviar").addEventListener("click", () => 
{
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const senhaUsuario = document.getElementById("senha-usuario").value;
    
    validarUsuario(false, nomeUsuario, senhaUsuario);
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
