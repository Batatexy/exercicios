
// Abaixo segue um exemplo de código que você pode ou não utilizar
import java.util.Locale;
import java.util.Scanner;

public class Problem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        // TODO: complete os espaços em branco com sua solução para o problema
        String nomes[] = new String[10];

        for (int i = 0; i < 10; i++) {
            nomes[i] = String.valueOf(i);
        }

        for (int i = 0; i < 10; i++) {
            if ((i != 2) && (i != 6) && (i != 8))
                continue;
            System.out.println(nomes[i]);

        }

    }

    // nomes[ ] = sc.nextLine();

}