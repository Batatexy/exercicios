package src;

public abstract class Funcionario 
{
	private String nome;
	private long cpf;
	final double salarioMinimo = 1302.00;
	
	public Funcionario(){}
	
	public Funcionario(String nome, long cpf)
	{
		this.nome = nome;
		this.cpf = cpf;
	}
	
	public abstract double calcularSalario();

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}
}
