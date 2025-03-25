package src;

public class Gerente  extends Funcionario
{
	private double bonificacao;
	
	public Gerente(String nome, long cpf, double bonificacao)
	{
		super(nome,cpf);
		this.bonificacao = bonificacao;
	}

	@Override
	public double calcularSalario() 
	{
		return bonificacao;
	}

	
	
	public double getBonificacao() {
		return bonificacao;
	}

	public void setBonificacao(double bonificacao) {
		this.bonificacao = bonificacao;
	}
}
