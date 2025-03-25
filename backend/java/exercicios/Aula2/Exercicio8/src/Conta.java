public class Conta {
	private long numero;
	private double limite, saldo;
	private Agencia agencia;
	
	//Construtor Explicito
	public Conta(long numero, double limite, long saldo) {
		this.numero = numero;
		this.limite = limite;
		this.saldo = saldo;
	}
	
	
	
	public void depositar(double valor) {
		this.saldo += valor;
	}
	
	public void sacar(double valor) {
		if (valor<=saldo)
		{
			this.saldo -= valor;
		}
		else
		{
			System.out.println("Você não possui este valor.");
		}
	}
	public void transferir(double valor, Conta destino) {
		sacar(valor);
		destino.depositar(valor);
		System.out.println("O valor de " + valor + " foi transferido para " + destino + " com sucesso.");
	}
	
	public void imprimirExtrato() {
		System.out.println("Imprimindo Extrato:");
		System.out.println("Número: " + this.getNumero());
		System.out.println("Limite: " + this.getLimite());
		System.out.println("Saldo: " + this.getSaldo());
		System.out.println("Número da Agência: " + this.getAgencia().getNumero());
		System.out.println("Nome da Agência: " + this.getAgencia().getNome());
	}
	
	
	//Criando uma agencia de TIPO AGENCIA:
	public void setAgencia(Agencia agencia) {
		this.agencia = agencia;
	}
	
	public Agencia getAgencia() {
		return agencia;
	}

	public long getNumero() {
		return numero;
	}

	public void setNumero(long numero) {
		this.numero = numero;
	}

	public double getLimite() {
		return limite;
	}

	public void setLimite(double limite) {
		this.limite = limite;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
}
