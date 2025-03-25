var espaco = "====================";
var canalMaximo = 545;
console.log(espaco + "\n====NOVO==CÓDIGO====\n" + espaco);
var tv = /** @class */ (function () {
    function tv(estado, volume, canal, marca, cor) {
        this.estado = estado;
        this.volume = volume;
        this.canal = canal;
        this.marca = marca;
        this.cor = cor;
    }
    Object.defineProperty(tv.prototype, "getEstado", {
        //Getters and Setters
        get: function () {
            return this.estado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "setEstado", {
        set: function (estado) {
            this.estado = estado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "getVolume", {
        get: function () {
            return this.volume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "setVolume", {
        set: function (volume) {
            this.volume = volume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "getCanal", {
        get: function () {
            return this.canal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "setCanal", {
        set: function (canal) {
            this.canal = canal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "getMarca", {
        get: function () {
            return this.marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "setMarca", {
        set: function (marca) {
            this.marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "getCor", {
        get: function () {
            return this.cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(tv.prototype, "setCor", {
        set: function (cor) {
            this.cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    tv.prototype.exibirTV = function () {
        console.log("\n=====STATUS==TV=====");
        console.log(this.estado ? "A TV está ligada" : "A TV está desligada");
        console.log("Volume:", this.volume);
        console.log("Canal:", this.canal);
        console.log("Cor:", this.cor);
        console.log("Marca:", this.marca);
        console.log(espaco);
    };
    return tv;
}());
var controle = /** @class */ (function () {
    function controle(tv) {
        this.tv = tv;
        this.marca = this.tv.getMarca;
        this.cor = this.tv.getCor;
    }
    Object.defineProperty(controle.prototype, "getTV", {
        //Getters and Setters
        get: function () {
            return this.tv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(controle.prototype, "setTV", {
        set: function (tv) {
            this.tv = tv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(controle.prototype, "getMarca", {
        get: function () {
            return this.marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(controle.prototype, "setMarca", {
        set: function (marca) {
            this.marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(controle.prototype, "getCor", {
        get: function () {
            return this.cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(controle.prototype, "setCor", {
        set: function (cor) {
            this.cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    //Inverter o estado da TV, ligar ou desligar
    controle.prototype.ligarDesligarTV = function () {
        this.tv.setEstado = !this.tv.getEstado;
    };
    //Aumentar, diminuir ou escolher volume
    controle.prototype.aumentarVolume = function () {
        if (this.tv.getEstado)
            this.tv.setVolume = this.verificarNumero(this.tv.getVolume + 1, 0, 100);
    };
    controle.prototype.diminuirVolume = function () {
        if (this.tv.getEstado)
            this.tv.setVolume = this.verificarNumero(this.tv.getVolume - 1, 0, 100);
    };
    controle.prototype.escolherVolume = function (volume) {
        if (this.tv.getEstado)
            this.tv.setVolume = this.verificarNumero(volume, 0, 100);
    };
    //Avançar, voltar ou escolher canal
    controle.prototype.avancarCanal = function () {
        if (this.tv.getEstado)
            this.tv.setCanal = this.verificarNumero(this.tv.getCanal + 1, 1, canalMaximo);
    };
    controle.prototype.voltarCanal = function () {
        if (this.tv.getEstado)
            this.tv.setCanal = this.verificarNumero(this.tv.getCanal - 1, 1, canalMaximo);
    };
    controle.prototype.escolherCanal = function (canal) {
        if (this.tv.getEstado)
            this.tv.setCanal = this.verificarNumero(canal, 1, canalMaximo);
    };
    controle.prototype.verificarNumero = function (numero, numeroMinimo, numeroMaximo) {
        if (numero < numeroMinimo) {
            numero = numeroMinimo;
        }
        if (numero > numeroMaximo) {
            numero = numeroMaximo;
        }
        return numero;
    };
    controle.prototype.exibirControle = function () {
        console.log("\n==STATUS==CONTROLE==");
        console.log("Cor:", this.cor);
        console.log("Marca:", this.marca);
        console.log("TV:", this.tv);
        console.log(espaco, "\n");
    };
    return controle;
}());
var tv1 = new tv(false, 18, 250, "LG", "Preto");
var controle1 = new controle(tv1);
var tv2 = new tv(false, 60, 25, "Samsung", "Branco");
var controle2 = new controle(tv2);
controle1.getTV.exibirTV();
controle2.getTV.exibirTV();
controle1.ligarDesligarTV();
controle1.aumentarVolume();
controle1.getTV.exibirTV();
controle1.escolherCanal(200);
controle1.getTV.exibirTV();
