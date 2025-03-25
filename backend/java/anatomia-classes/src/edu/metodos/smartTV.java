package metodos;

public class smartTV {
    boolean ligada = false;
    int volume = 25;
    int canal = 1;

    public void ligar() {
        ligada = true;
    }

    public void desligar() {
        ligada = false;
    }

    public void aumentarVolume() {
        volume++;
    }

    public void diminuirVolume() {
        volume--;
    }

    public void avancarCanal() {
        canal++;
    }

    public void recuarCanal() {
        canal--;
    }

    public void escolherCanal(int novoCanal) {
        canal = novoCanal;
    }

    public void escolherVolume(int novoVolume) {
        volume = novoVolume;
    }
}
