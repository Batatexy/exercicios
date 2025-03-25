public class calculos {
    public static void main(String[] args) {
        double contaInicial = 2631.57;
        double conta = contaInicial;
        double parcelado = 2631.57;
        double vista = 2500;
        double juros = 0.01;
        double parcela = 263.15;
        int meses = 10;
        double contar = parcelado;

        for (int x = 0; x < meses; x++) {
            contar += (conta * juros) - parcela;
            conta += (conta * juros) - parcela;
            System.out.println(contar);
        }

        System.out.println("Saldo restante se parcelado: " + contar);
        System.out.println("Saldo restante se à vista: " + (contaInicial - vista));

        if ((conta) < contaInicial - vista) {
            System.out.println("Vale a pena pagar a vista");
        } else {
            System.out.println("Vale a pena parcelar");
        }

    }
}
