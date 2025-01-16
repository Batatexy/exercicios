var espaco = "====================";
console.clear();
console.log("\n", espaco, "====NOVO==CÓDIGO====", espaco, "\n");
var tv1 = {
    estado: false,
    volume: 10,
    canal: 245,
    numero: 1,
    marca: "LG",
    cor: "Preto",
};
var controle1 = {
    tv: tv1,
    numero: tv1.numero,
    marca: tv1.marca,
    cor: tv1.cor,
};
exibirTV(controle1);
ligarDesligarTV(controle1);
aumentarVolume(controle1, 20);
escolherCanal(controle1, 800);
exibirTV(controle1);
function exibirControle(controle) {
    console.log("\n==STATUS==CONTROLE==");
    console.log("Número: ", controle.numero);
    console.log("Cor: ", controle.cor);
    console.log("Marca: ", controle.marca);
    console.log("TV: ", controle.tv);
    console.log(espaco, "\n");
}
function exibirTV(controle) {
    console.log("\n=====STATUS==TV=====");
    console.log(controle.tv.estado ? "A TV está ligada" : "A TV está desligada");
    console.log("Volume: ", controle.tv.volume);
    console.log("Canal: ", controle.tv.canal);
    console.log("Número: ", controle.tv.numero);
    console.log("Cor: ", controle.tv.cor);
    console.log("Marca: ", controle.tv.marca);
    console.log(espaco, "\n");
}
function ligarDesligarTV(controle) {
    controle.tv.estado = !controle.tv.estado;
}
function aumentarVolume(controle, volume) {
    if (controle.tv.estado) {
        volume ? controle.tv.volume += volume : controle.tv.volume++;
        if (controle.tv.volume > 100) {
            controle.tv.volume = 100;
        }
    }
}
function diminuirVolume(controle, volume) {
    if (controle.tv.estado) {
        volume ? controle.tv.volume -= volume : controle.tv.volume--;
        if (controle.tv.volume < 0) {
            controle.tv.volume = 0;
        }
    }
}
function avancarCanal(controle, canal) {
    if (controle.tv.estado) {
        canal ? controle.tv.canal += canal : controle.tv.canal++;
        controle.tv.canal = verificarCanal(controle.tv.canal);
    }
}
function voltarCanal(controle, canal) {
    if (controle.tv.estado) {
        canal ? controle.tv.canal -= canal : controle.tv.canal--;
        controle.tv.canal = verificarCanal(controle.tv.canal);
    }
}
function escolherCanal(controle, canal) {
    if (controle.tv.estado) {
        controle.tv.canal = verificarCanal(canal);
    }
}
function verificarCanal(canal) {
    if (canal < 1) {
        canal = 1;
    }
    if (canal > 545) {
        canal = 545;
    }
    return canal;
}
