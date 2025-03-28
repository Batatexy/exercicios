package javaAvaliacao;

public class Tv extends Dispositivo
{

	private int volume;

	public Tv(int id, String nome, String marca)
	{
		super(id, nome, marca);
		this.volume = 25;
	}

	@Override
	public void exibirDetalhes()
	{
		System.out.print("[Tv: " + this.getNome() + ", Marca: " + this.getMarca() + "]" );
		System.out.print(" [Estado: " + this.verificarEstado(getEstado()) + "a]");
		
		if (this.getEstado())
			System.out.print(" [Volume: " + this.volume + "]");
		
		System.out.println();
	}

	@Override
	public void ajustarConfiguracoes(int volume) throws ValorInvalido
	{
		if (this.getEstado())
		{
			try
			{
				if (volume < 0 || volume > 100)
					throw new ValorInvalido();
			} 
			catch (Exception e)
			{
				System.out.println(e.getMessage());
			}

			this.volume = volume;
		}
		else
		{
			System.out.println("Tv Desligada!");
		}
	}
		

}
