public class Main {
    public static void main(String[] args) {
        Conta correnteUm = new ContaCorrente();
        Conta poupancaUm = new ContaPoupanca();

        correnteUm.depositar(100);

        correnteUm.imprimirExtrato();
        poupancaUm.imprimirExtrato();

        correnteUm.transferir(100, poupancaUm);

        correnteUm.imprimirExtrato();
        poupancaUm.imprimirExtrato();
    }
}
