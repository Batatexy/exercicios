public class MainUm {
    public static void main(String[] args) throws Exception {
        int numeroUm = 12;
        int numeroDois = 4;

        try {
            float resultado = numeroUm / numeroDois;
        }

        catch (NumberFormatException e) {
            e.printStackTrace();
        } finally {
            System.out.println("Chegou no finally");
        }

        System.out.println("O código continua");
    }
}
