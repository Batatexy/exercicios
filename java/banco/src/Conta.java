//Abstract faz com que jamais esta classe seja criada como um novo objeto, mas seus filos sim, no caso: Conta Corrente e Conta Poupança, em resumo: Um template
//Protected faz com que continue privado para externos, mas para filhos continue acessível
public abstract class Conta implements IConta {

    protected int agencia;
    protected int numero;
    protected double saldo;

    private static final int AGENCIA_PADRAO = 1;
    private static int SEQUENCIAL = 1;

    public Conta() {
        this.agencia = Conta.AGENCIA_PADRAO;
        this.numero = SEQUENCIAL++;
    }

    public void sacar(double valor) {
        this.saldo -= valor;
    }

    public void depositar(double valor) {
        this.saldo += valor;
    }

    // Transferência nada mais é que o saque de uma conta e o depósito em outra
    public void transferir(double valor, Conta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public int getAgencia() {
        return agencia;
    }

    public int getNumero() {
        return numero;
    }

    public double getSaldo() {
        return saldo;
    }

    protected void imprimirInformacoesComuns() {
        System.out.println(String.format("Agencia: " + this.agencia));
        System.out.println(String.format("Numero: " + this.numero));
        System.out.println(String.format("Saldo: " + this.saldo));
    }
}
