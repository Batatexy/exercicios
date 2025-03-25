public class ReprodutorMusical {
    public static void tocar(String musica) {
        System.out.println("Tocando: " + musica + ".\n");
    }

    public static void pausar() {
        System.out.println("Música pausada. \n");
    }

    public static void selecionarMusica(String musica) {
        System.out.println("Música selecionada: " + musica + ".");
        tocar(musica);
    }
}
