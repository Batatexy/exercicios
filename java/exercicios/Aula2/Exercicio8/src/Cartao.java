public class Cartao {
	private long numero;
	private double limite;
	
	public Cartao(long numero, double limite) {
		this.numero = numero;
		this.limite = limite;
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
}
