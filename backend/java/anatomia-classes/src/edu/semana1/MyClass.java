package semana1;

public class MyClass {
    public static void main(String[] args) {
        System.out.print("Olá Mundo");

        // Convenção camelCase = primeiroNome = olaMundo
        int ano = 2023;
        String trabajoChique = "opa";

        // double(8 bytes) tem o dobro de memória do que o float(4 bytes),
        // mas se prefere usar o double pela melhor garantia de precisão
        double numero1 = 623.12;
        boolean verdadeira = false;

        ano = 2024;
        System.out.print(ano - 100);

        // Algumas exceções quando não se alterará a variável
        final String BR = "Brasil";
        final double PI = 3.14;
        final int ESTADOS_BRASILEIRO = 27;
        final int ANO_2000 = 2000;

        //// Variáveis ainda não definidas
        // Dog spike; n parece funcionar por enquanto sa bomba ai
        String spike;
        // nt fica 0, boolean fica falso

        // Métodos = Funções
        String primeiroNome = "Gabriel";
        String segundoNome = "Carrascosa";

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
        System.out.println(nomeCompleto); // println = PRINTLN
    }

    // Função de retorno do Nome Completo
    public static String nomeCompleto(String primeiroNome, String segundoNome) {
        return "Resultado do método " + primeiroNome.concat(" ").concat(segundoNome);

    }

    /**
     * esses dois ** é usado
     * para documentação e
     * geralmente aqui antes
     * de um método
     */

}

// No terminal execute o comando abaixo para documentar todos os projetos
// javadoc -encoding UTF-8 -docencoding ISO-8859-1 -d ../docs src/*.java
