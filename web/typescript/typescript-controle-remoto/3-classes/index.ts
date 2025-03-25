let espaco: string = "====================";
let canalMaximo: number = 545;

console.log(espaco + "\n====NOVO==CÓDIGO====\n" + espaco);

class tv
{
    private estado: boolean;
    private volume: number;
    private canal: number;
    private marca: string;
    private cor: string;

    public constructor(estado: boolean, volume: number, canal: number, marca: string, cor: string)
    {
        this.estado = estado;
        this.volume = volume;
        this.canal = canal;
        this.marca = marca;
        this.cor = cor;
    }

    //Getters and Setters

    public get getEstado()
    {
        return this.estado;
    }

    public set setEstado(estado: boolean)
    {
        this.estado = estado;
    }

    public get getVolume()
    {
        return this.volume;
    }

    public set setVolume(volume: number)
    {
        this.volume = volume;
    }

    public get getCanal()
    {
        return this.canal;
    }

    public set setCanal(canal: number)
    {
        this.canal = canal;
    }

    public get getMarca()
    {
        return this.marca;
    }

    public set setMarca(marca: string)
    {
        this.marca = marca;
    }

    public get getCor()
    {
        return this.cor;
    }

    public set setCor(cor: string)
    {
        this.cor = cor;
    }

    public exibirTV()
    {
        console.log("\n=====STATUS==TV=====");
        console.log(this.estado ? "A TV está ligada" : "A TV está desligada");
        console.log("Volume:", this.volume);
        console.log("Canal:", this.canal);
        console.log("Cor:", this.cor);
        console.log("Marca:", this.marca);
        console.log(espaco);
    }
}

class controle
{
    private tv: tv;
    private marca: string;
    private cor: string;

    public constructor(tv: tv)
    {
        this.tv = tv;
        this.marca = this.tv.getMarca;
        this.cor = this.tv.getCor;
    }

    //Getters and Setters

    public get getTV()
    {
        return this.tv;
    }

    public set setTV(tv: tv)
    {
        this.tv = tv;
    }

    public get getMarca()
    {
        return this.marca;
    }

    public set setMarca(marca: string)
    {
        this.marca = marca;
    }

    public get getCor()
    {
        return this.cor;
    }

    public set setCor(cor: string)
    {
        this.cor = cor;
    }

    //Inverter o estado da TV, ligar ou desligar

    public ligarDesligarTV()
    {
        this.tv.setEstado = !this.tv.getEstado;
    }

    //Aumentar, diminuir ou escolher volume

    public aumentarVolume()
    {
        if(this.tv.getEstado) this.tv.setVolume = this.verificarNumero(this.tv.getVolume + 1, 0, 100);
    }

    public diminuirVolume()
    {
        if(this.tv.getEstado) this.tv.setVolume = this.verificarNumero(this.tv.getVolume - 1, 0, 100);
    }

    public escolherVolume(volume: number)
    {
        if(this.tv.getEstado) this.tv.setVolume = this.verificarNumero(volume, 0, 100);
    }

    //Avançar, voltar ou escolher canal

    public avancarCanal()
    {
        if(this.tv.getEstado) this.tv.setCanal = this.verificarNumero(this.tv.getCanal + 1, 1, canalMaximo);
    }

    public voltarCanal()
    {
        if(this.tv.getEstado) this.tv.setCanal = this.verificarNumero(this.tv.getCanal - 1, 1, canalMaximo);
    }

    public escolherCanal(canal: number)
    {
        if(this.tv.getEstado) this.tv.setCanal = this.verificarNumero(canal, 1, canalMaximo);
    }

    public verificarNumero(numero: number, numeroMinimo: number, numeroMaximo: number): number
    {
        if (numero < numeroMinimo)
        {
            numero = numeroMinimo;
        }

        if (numero > numeroMaximo)
        {
            numero = numeroMaximo;
        }

        return numero;
    }

    public exibirControle(): void
    {
        console.log("\n==STATUS==CONTROLE==");
        console.log("Cor:", this.cor);
        console.log("Marca:", this.marca);
        console.log("TV:", this.tv);
        console.log(espaco, "\n");
    }
}

let tv1 = new tv(false, 18, 250, "LG", "Preto")
let controle1 = new controle(tv1)

let tv2 = new tv(false, 60, 25, "Samsung", "Branco")
let controle2 = new controle(tv2)

controle1.getTV.exibirTV();
controle2.getTV.exibirTV();

controle1.ligarDesligarTV();

controle1.aumentarVolume();
controle1.getTV.exibirTV();

controle1.escolherCanal(200);
controle1.getTV.exibirTV();
