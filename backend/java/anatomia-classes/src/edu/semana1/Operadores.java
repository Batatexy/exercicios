package semana1;

public class Operadores {
    public static void main(String[] args) {
        // Tornar positivo um número negativo
        int negativo = -6;
        negativo = negativo * (-1);

        System.out.println(negativo);

        negativo += 1;

        // Se o valor for alterado no print, ele altera a variável em si, como pode
        System.out.println(negativo += 3);
        System.out.println(negativo);

        // Simplificar algumas coisas ai
        String resultado1 = "";
        int a = 4;
        int b = 12;

        if (a == b)
            resultado1 = "Verdadeiro";
        else
            resultado1 = "Falso";
        System.out.println(resultado1);

        // Dá pra resumir sa bomba ai em cima no de baixo
        String resultado2 = a == b ? "Verdadeiro" : "Falso";
        System.out.println(resultado2);
        // Eu altero a variável dando pra ela uma condição de qual escolher

        // Avaliar se o conteúdo de duas Strings são iguais
        String nomeUm = "Gabriel";
        // n entendi oq é, mas é isso ai .equals()
        String nomeDois = new String("Gabriel");

        System.out.println(nomeUm.equals(nomeDois));

        boolean condicaoUm = true;
        boolean condicaoDois = false;

        // Sinais: &&, ||
        // Quando envolve duas condições se usa o { }
        if (condicaoUm && condicaoDois) {
            System.err.println("As duas são verdadeiras");
        } else {
            System.err.println("As duas são falsas");
        }

        if (condicaoUm || condicaoDois) {
            System.err.println("Uma é verdadeira");
        } else {
            System.err.println("As duas são falsas");
        }

    }
}
