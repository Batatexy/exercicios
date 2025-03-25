public class Main {
    public static void main(String[] args) {
        AparelhoTelefonico.ligar();
        AparelhoTelefonico.atender();

        ReprodutorMusical.selecionarMusica("Eminem - Without Me");

        NavegadorInternet.adicionarNovaAba();
        NavegadorInternet.exibirPagina();
        NavegadorInternet.atualizarPagina();

        AparelhoTelefonico.iniciarCorreiVoz();

        ReprodutorMusical.pausar();

        AparelhoTelefonico.desligar();
    }
}