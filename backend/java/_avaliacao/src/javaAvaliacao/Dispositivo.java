package javaAvaliacao;

public abstract class Dispositivo
{
	private String nome;
	private String marca;
	private boolean estado;

	private int id;

	public Dispositivo(int id, String nome, String marca)
	{
		this.id = id;
		this.nome = nome;
		this.marca = marca;
		this.estado = false;
	}

	public void ligarDesligar()
	{
		this.estado = !this.estado;
	}

	public void ajustarConfiguracoes(int valor) throws ValorInvalido
	{

	}

	public abstract void exibirDetalhes();

	public String verificarEstado(boolean estado)
	{
		if (estado)
			return "ligad";

		return "desligad";
	}

	
	
	
	
	
	
	
	
	
	
	
	public String getNome()
	{
		return this.nome;
	}

	public String getMarca()
	{
		return this.marca;
	}

	public boolean getEstado()
	{
		return this.estado;
	}

	public int getId()
	{
		return this.id;
	}


}
