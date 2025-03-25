package exercicios05_Carros;

public class Porta
{
	private String descricao;
	private boolean estado;

	public Porta(String descricao, boolean estado)
	{
		this.descricao = descricao;
		this.estado = estado;
	}

	public void abrirOuFecharPorta()
	{
		this.estado = !estado;
	}

	public String getDescricao()
	{
		return descricao;
	}

	public boolean getEstado()
	{
		return estado;
	}

	public void setEstado(boolean estado)
	{
		this.estado = estado;
	}

}
