import java.util.ArrayList;

public class Cliente {
	private String nome, documento;
	private ArrayList<Cartao> cartoes;
	private Conta conta;
	
	
	//Métodos
	public void sacar(double valor) {
		this.getConta().sacar(valor);
	}
	
	public void depositar(double valor) {
		this.getConta().depositar(valor);
	}
	
	public void transferir(double valor, Conta destino) {
		this.getConta().transferir(valor,destino);
	}
	
	public void imprimirExtrato() {
		this.getConta().imprimirExtrato();
		System.out.println("Nome: " + this.getNome());
		System.out.println("Documento: " + this.getDocumento());
		for (Cartao i : this.getCartoes()) {
			System.out.println(i.getNumero());
			System.out.println(i.getLimite());
		}
	}

	
	
	public Cliente(String nome, String documento) {
		this.nome = nome;
		this.documento = documento;
		
		//Decorar:
		this.cartoes = new ArrayList<Cartao>();
	}
	
	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	
	//decorar
	public ArrayList<Cartao> getCartoes() {
		return cartoes;
	}

	public void setCartoes(ArrayList<Cartao> cartoes) {
		this.cartoes = cartoes;
	}

	public Conta getConta() {
		return conta;
	}

	public void setConta(Conta conta) {
		this.conta = conta;
	}
}
