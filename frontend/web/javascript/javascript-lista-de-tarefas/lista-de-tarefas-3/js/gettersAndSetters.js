export function getListaTarefas() 
{
    return JSON.parse(localStorage.getItem("lista")) || [];
}

export function setListaTarefas(novaLista) 
{
    localStorage.setItem("lista", JSON.stringify(novaLista));
}

export function getContador() 
{
    return JSON.parse(localStorage.getItem("contador")) || 0;
}

export function setContador(contador) 
{
    localStorage.setItem("contador", JSON.stringify(contador));
}