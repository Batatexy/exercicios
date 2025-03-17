package exercicio5_Carros;

public class Cambio
{
	private int marchaAtual;
	private int marchaMaxima;

	public Cambio(int marchaAtual, int cambioMaximo)
	{
		this.marchaAtual = marchaAtual;
		this.marchaMaxima = cambioMaximo;
	}

	public void setMarchaAtual(int marchaAtual)
	{
		if (marchaAtual <= this.marchaMaxima)
		{
			this.marchaAtual = marchaAtual;
		}
		else
		{
			this.marchaAtual = this.marchaMaxima;
			System.out.println("O Carro só tem " + this.marchaMaxima + " marchas!");
		}
	}

	public int getMarchaAtual()
	{
		return this.marchaAtual;
	}

}
