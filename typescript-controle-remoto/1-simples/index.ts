function exibirControle(controle: 
{
    tv: 
    {
        estado:boolean,
        volume: number,
        canal: number
        marca: string,
        cor: string,
    },
    nome: string,
}): void
{
    console.log("Status do" , controle.nome,":", controle);
}

function exibirStatus(
controle: 
{
    tv:
    {
        estado:boolean,
        volume: number,
        canal: number
        marca: string,
        cor: string
    }
}): void
{
    console.log("===EXIBIR==STATUS===");
    console.log(controle.tv.estado ? "A TV está ligada" : "A TV está desligada");

    console.log("O volume está em ", controle.tv.volume);
    console.log("O canal está em ", controle.tv.canal);
    console.log("A cor da TV é", controle.tv.cor);
    console.log("A marca da TV é", controle.tv.marca);

    console.log(espaco);
}

function ligarDesligarTV(
controle: 
{
    tv: {estado:boolean,}
}
): void
{
    controle.tv.estado = !controle.tv.estado;
    console.log(controle.tv.estado ? "A TV ligou" : "A TV desligou");
    console.log(espaco);
}

function aumentarVolume(
controle:
{
    tv: 
    {
        estado:boolean,
        volume: number,
    }
},
volume: number | null)
{
    if (controle.tv.estado)
    {
        let antigoVolume: number = controle.tv.volume;
        let novoVolume: number;
        volume ? novoVolume = volume : novoVolume = 1;

        controle.tv.volume += novoVolume;

        if (controle.tv.volume > 100)
        {
            controle.tv.volume = 100;
        }

        console.log("Volume:" , antigoVolume , "+", novoVolume, "=", controle.tv.volume);
        console.log(espaco);
    }
}

function diminuirVolume(
controle: 
{
    tv: 
    {
        estado:boolean,
        volume: number,
    }
},
volume: number | null)
{
    if (controle.tv.estado)
    {
        if (volume)
        {
            controle.tv.volume -= volume;
        }
        else
        {
            controle.tv.volume --;
        }

        if (controle.tv.volume < 0)
        {
            controle.tv.volume = 0;
        }

        console.log("Volume: " , controle.tv.volume);
        console.log(espaco);
    }
}

function avancarCanal(
controle: 
{
    tv: 
    {
        estado:boolean,
        canal: number,
    }
},
canal: number | null): void
{
    if (controle.tv.estado)
    {
        if (canal)
        {
            controle.tv.canal += canal;
        }
        else
        {
            controle.tv.canal ++;
        }

        console.log("Canal: " , controle.tv.canal);
        console.log(espaco);
    }
}

function voltarCanal(controle: 
{
    tv: 
    {
        estado:boolean,
        canal: number,
    }
},
canal: number | null): void
{
    if (controle.tv.estado)
    {
        if (canal)
        {
            controle.tv.canal -= canal;
        }
        else
        {
            controle.tv.canal --;
        }

        if (controle.tv.canal < 1)
        {
            controle.tv.canal = 1;
        }

        console.log("Canal: " , controle.tv.canal);
        console.log(espaco);
    }
}

let tv1 =
{
    estado: false,
    volume: 36,
    canal: 18,
    
    marca: "LG",
    cor: "preta",

    nome: "tv1",
};

let tv2 =
{
    estado: false,
    volume: 90,
    canal: 63,
    
    marca: "Samsung",
    cor: "branca",

    nome: "tv2",
};

let controle1 =
{
    tv: tv1,

    marca: "LG",
    cor: "preta",

    nome: "controle1",
};

let controle2 =
{
    tv: tv2,

    marca: "Samsung",
    cor: "branca",

    nome: "controle2",
};

let espaco: string = "====================";

console.clear()
console.log(espaco);
console.log("====NOVO==CÓDIGO====");
console.log(espaco);

let controle = controle1
for(let i: number = 0; i < 2; i++)
{
    switch (i)
    {
        case 1:
        {
            controle = controle2;
            break;
        }
    }

    console.log("\n", controle.nome, ":")

    //A TV está desligada, não vai funcionar
    exibirStatus(controle);

    aumentarVolume(controle, null);
    avancarCanal(controle, null);
    exibirStatus(controle);

    //Ligar a TV
    ligarDesligarTV(controle);

    //Aumentar Volume
    aumentarVolume(controle, null);
    aumentarVolume(controle, 10);
    aumentarVolume(controle, 200);

    //Diminuir Volume
    diminuirVolume(controle, null);
    diminuirVolume(controle, 10);
    diminuirVolume(controle, 200);

    //Avançar Canal
    avancarCanal(controle, null);
    avancarCanal(controle, 10);
    avancarCanal(controle, 200);

    //Voltar Canal
    voltarCanal(controle, null);
    voltarCanal(controle, 10);
    voltarCanal(controle, 400);

    //Desligar a TV
    exibirStatus(controle);
    ligarDesligarTV(controle);
    exibirStatus(controle);

    exibirControle(controle);
}
