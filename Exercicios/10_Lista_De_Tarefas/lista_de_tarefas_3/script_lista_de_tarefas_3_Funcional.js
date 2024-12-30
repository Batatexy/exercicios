//Check
function check(id)
{
    itemHtml = document.getElementById(id);
    let check = itemHtml.querySelector(".check button i");
    console.log(check);

    if (check.className == "bi bi-square")
    {
        itemHtml.className += " riscado";
        check.className = "bi bi-check-square-fill";
        lista[id].check = true;
    }
    else
    {
        itemHtml.className = "item-fora";
        check.className= "bi bi-square";

        lista[id].check = false;
    }

    console.clear();
    console.log(lista);
}

//Textarea quando clicada volta ao normal
function reset(tipo, id)
{
    console.log("Reset");
    let itemHtml = document.getElementById(id);
    itemHtml.querySelector(tipo).className = "";

    if (tipo == "input")
    {
        itemHtml.querySelector(".titulo input").className = "";
    }
    else
    {
        itemHtml.querySelector(".descricao textarea").className = "";
    }
}


function moverBaixo(id)
{
    if (lista[id].status == "aplicado")
    {
        console.log("item clickado, status: aplicado")
        for (let i = id+1; i < lista.length; i++)
        {
            console.log(i)
            if (lista[i] != null && lista[i].status == "aplicado")
            {
                let itemDeBaixo = lista[i];
        
                console.log("Antes da Troca")
                console.log(itemDeBaixo)
                console.log(lista[id])
        
                lista[i]=lista[id];
                lista[id] = itemDeBaixo;
                
                let htmlDeCima = document.getElementById(i);
                htmlDeCima.innerHTML = montarItem("aplicar", i );
        
                let itemHtml = document.getElementById(id);
                itemHtml.innerHTML = montarItem("aplicar", id );
        
                console.clear();
                console.log(lista);
    
                break;
            }
        }
    }

    console.log("item clickado, status: diferente de aplicado")
}