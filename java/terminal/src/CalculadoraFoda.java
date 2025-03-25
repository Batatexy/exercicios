import java.util.Locale;
import java.util.Scanner;

public class CalculadoraFoda {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite um número:");
        long numeroUm = scanner.nextInt();

        System.out.println("Digite o operador:");
        String operador = scanner.next();

        System.out.println("Digite um segundo número:");
        long numeroDois = scanner.nextInt();

        long resultado = 0;

        if (operador.equals("+")) {
            resultado = numeroUm + numeroDois;
        }
        if (operador.equals("-")) {
            resultado = numeroUm - numeroDois;
        }
        if (operador.equals("/")) {
            resultado = numeroUm / numeroDois;
        }
        if (operador.equals("x")) {
            resultado = numeroUm * numeroDois;
        }

        System.out.println(resultado);
    }
}
