public class javaTerminal {
    public static void main(String[] args) {
        /*
         * abrir a pasta do cmd
         * cd C:\Users\bielc\Área de Trabalho\java\java-terminal\bin
         * escrever o tipo e depois o nome do arquivo, na frente os parâmetros
         * java javaTerminal Gabriel Carrascosa 19 1.71
         */

        String nome = args[0];
        String sobrenome = args[1];
        int idade = Integer.valueOf(args[2]);
        double altura = Double.valueOf(args[3]);

        System.out.println("Olá, me chamo " + nome + " " + sobrenome);
        System.out.println("Tenho " + idade + " anos ");
        System.out.println("Minha altura é " + altura + "cm ");
    }
}
