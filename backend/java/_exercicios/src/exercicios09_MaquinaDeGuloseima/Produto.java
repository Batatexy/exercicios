package exercicios09_MaquinaDeGuloseima;

public class Produto
{
	private double valor;
	private String descricao;

	public Produto(double valor, String descricao)
	{
		this.valor = valor;
		this.descricao = descricao;
	}

	public double getValor()
	{
		return valor;
	}

	public String getDescricao()
	{
		return descricao;
	}

}
