var lista = [];
function getLista() {
    return lista;
}
function setLista(novaLista) {
    lista = novaLista;
}
function adicionarNaLista(numero) {
    var novaLista = getLista();
    novaLista.push(numero);
    setLista(novaLista);
}
function removerUltimoItem() {
    var novaLista = getLista();
    novaLista.pop();
    setLista(novaLista);
}
function removerUmNumero(numero) {
    var novaLista = getLista();
    novaLista.forEach(function (item, index) {
        if (item == numero) {
            lista.splice(index, 1);
        }
    });
    setLista(novaLista);
}
function atualizarNumero(numeroAntigo, numeroNovo) {
    var novaLista = getLista();
    novaLista.forEach(function (item, index) {
        if (item == numeroAntigo) {
            lista[index] = numeroNovo;
        }
    });
    setLista(novaLista);
}
function somarNumeros(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}
adicionarNaLista(12);
adicionarNaLista(somarNumeros(12, 5));
adicionarNaLista(12);
adicionarNaLista(12);
console.log("Antes do Pop: ", getLista());
removerUltimoItem();
console.log("Depois do Pop: ", getLista());
var numero = 12;
removerUmNumero(numero);
console.log("Depois de remover o numero ", numero, ": ", getLista());
adicionarNaLista(12);
adicionarNaLista(12);
console.log("Antes de atualizar o numero ", +numero, " para ", numero + 1, ": ", getLista());
atualizarNumero(numero, numero + 1);
console.log("Depois de atualizar o numero ", +numero, " para ", numero + 1, ": ", getLista());
function somarMatrizes(matrizUm, matrizDois) {
    var matrizSomada = [];
    for (var i = 0; i < matrizUm.length; i++) {
        matrizSomada.push([]);
        for (var j = 0; j < matrizUm.length; j++) {
            matrizSomada[i].push(matrizUm[i][j] + matrizDois[i][j]);
        }
    }
    return matrizSomada;
}
console.log(somarMatrizes([[10, 20, 30], [40, 50, 60], [70, 80, 90]], [[90, 80, 70], [60, 50, 40], [30, 20, 10]]));
function criarTriangulo() {
    for (var i = 0; i < 10; i++) {
        var texto = "";
        for (var j = 0; j <= i; j++) {
            texto += "*";
        }
        console.log(texto);
    }
}
criarTriangulo();
/*
function transformarNumeroEmLista(numero: number): Array<number>
{
    let tamanho: number = String(numero).length;
    let lista: Array<number> = [];

    for(let i = 1; i <= tamanho; i++)
    {
        let numeroString: string = String(numero);
        numeroString.split()

        lista.push(numeroIntUm)
    }
    
    return lista;
}

const numeroDois: number = 12342345;
console.log(transformarNumeroEmLista(numeroDois))
 */
