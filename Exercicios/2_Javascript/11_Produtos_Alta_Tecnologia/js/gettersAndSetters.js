//Se existir, puxar a lista do localStorage, senão puxa uma lista vazia
export function getListaCarrinho()
{
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

export function setListaCarrinho(carrinho)
{
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

export function getUsuario()
{
    return JSON.parse(sessionStorage.getItem("usuario")) || 0;
}

export function setUsuario(usuario)
{
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
}
