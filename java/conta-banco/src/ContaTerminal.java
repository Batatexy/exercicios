import java.util.InputMismatchException;
import java.util.Locale;
import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        // TODO: Conhecer e importar a classe Scanner

        // Exibir as mensagens para o usuário

        // Obter pela classe scanner os valores digitados no terminal

        // Exibir a mensagem de conta criada

        System.err.println("Bem vindo(a), insira as informações que estiverem sendo solicitadas para criar sua conta:");

        try {
            System.err.println("Digite o número da conta:");
            int numero = scanner.nextInt();

            System.err.println("Digite o nome da agência:");
            String agencia = scanner.next();

            System.err.println("Digite seu nome:");
            String nome = scanner.next();

            System.err.println("Digite o saldo da conta:");
            double saldo = scanner.nextDouble();

            System.out.println(
                    "Olá " + nome + ", obrigado por criar uma conta em nosso banco, sua agência é " + agencia
                            + ", conta " + numero + " e seu saldo de R$" + saldo + " já está disponível para saque.");

        } catch (InputMismatchException e) {
            System.out.println("Valor inválido.");
        }

        scanner.close();
    }
}
