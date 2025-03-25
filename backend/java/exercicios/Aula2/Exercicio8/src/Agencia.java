public class Agencia {
	private long numero;
	private String nome;
	
	//Construtor Explicito
	public Agencia(long numero, String nome) {
		this.numero = numero;
		this.nome = nome;
	}
	
	
	
	public long getNumero() {
		return numero;
	}

	public void setNumero(long numero) {
		this.numero = numero;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
