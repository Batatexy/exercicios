import java.io.FileReader;
import java.io.IOException;

public class OutrosExemplos {
    public static void main(String[] args) {

        // Exemplo 1
        try {
            // Aqui vai o código suspeito
        } catch (Exception e) {
            // Aqui a gente trata o erro
        } finally {
            System.out.println("Acabou o try-catch!");
        }

        // Exemplo 2
        try (FileReader arquivo = new FileReader("texto.txt")) {
            // Aqui você faz as suas mágicas com o arquivo
        } catch (IOException e) {
            // Aqui você lida com algum problema, se acontecer
        }

    }
}
