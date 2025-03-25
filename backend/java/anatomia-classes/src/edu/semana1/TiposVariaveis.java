package semana1;

public class TiposVariaveis {
    public static void main(String[] args) {
        // Valor em milhar
        double salarioMinimo = 2500;

        // Valor em decimal
        salarioMinimo = 2.500;

        // Alguns exemplos:
        int cep = 21070233;
        long cpf = 98375962015L;
        float pi = 3.14F;

        // Java eres tipado manito, o valor atual pode sim caber dentro de short, mas e no futuro?
        short numeroCurto1 = 1;
        int numeroNormal1 = numeroCurto1;
        short numeroCurto2 = numeroNormal1;

        // Constantes, deve estar em maiúsculo e conter final no começo
        final double PI = 3.14F;
        PI = 123;
        System.out.println(PI);

        // Tipo carácter só armazena um único carácter
        char sexo = 'M';

        // Sla anotei
        Date dataNascimento = new Date();
    }
}
