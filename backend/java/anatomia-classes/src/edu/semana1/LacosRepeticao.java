package semana1;

import java.util.Locale;
import java.util.Scanner;
import java.util.Random;

public class LacosRepeticao {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        for (int x = 0; x < 5; x++) {
            System.out.println(x);
        }

        System.out.println(" ");

        String alunos[] = { "João", "Felipe", "Gabriel", "Rodrigo" };

        // O length serve pra ver a quantidade de itens em um array
        for (int x = 0; x < alunos.length; x++) {
            System.out.println("O aluno na posição " + x + " é o " + alunos[x]);
        }

        System.out.println(" ");

        // Outra forma de só imprimir os nomes, já que ele n conta os números:
        for (String y : alunos) {
            System.out.println("Nome do aluno é " + y);
        }

        System.out.println(" ");

        // Utilizando break e continue(ele interrompe em um determinado momento)

        for (int x = 0; x < 10; x++) {
            if (x == 7) // Não imprime o número 7 e para a execução
                break;
            if (x == 4) // Não imprime o número 4 e continua a execução
                continue;

            System.out.println(x);
        }

        System.out.println("Discando...");
        // Repita até que algo se torne verdadeiro
        do {
            System.out.println("Tocando...");
        } while (tocando());

        System.out.println("Alô, aqui quem fala é o antepigmon!!!");

        // Programinha básico de compra, se o valor do produto for menor que a mesada,
        // ele não compra, se tiver grana, ele compra
        double mesada = 50.0;
        double valor = 0;
        while (mesada > 0) {
            System.out.println("Digite o valor do produto:");
            valor = scanner.nextDouble();

            if (mesada - valor < 0) {
                System.out.println("Mucho caro");
            }

            else {
                mesada -= valor;
            }

            System.out.println("Ainda tens " + mesada + " Dinheiros.");

        }

    }

    private static boolean tocando() {
        // Randomizar um número de 1 a 3?
        boolean atendeu = new Random().nextInt(3) == 1;
        System.out.println(atendeu);
        // Negando o ato de continuar tocando
        return !atendeu;
    }
}
