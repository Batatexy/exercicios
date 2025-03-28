package javaAvaliacao;

public class ArCondicionado extends Dispositivo
{
	private int temperatura;

	public ArCondicionado(int id, String nome, String marca)
	{
		super(id, nome, marca);
		this.temperatura = 24;
	}

	@Override
	public void exibirDetalhes()
	{
		System.out.print("[Ar Condicionado: " + this.getNome() + ", Marca: " + this.getMarca() + "]");
		System.out.print(" [Estado: " + this.verificarEstado(getEstado()) + "o]");

		if (this.getEstado())
			System.out.print(" [Temperatura: " + this.temperatura + "]");

		System.out.println();
	}

	@Override
	public void ajustarConfiguracoes(int temperatura) throws ValorInvalido
	{
		if (this.getEstado())
		{
			try
			{
				if (temperatura < 16 || temperatura > 30)
					throw new ValorInvalido();
			} 
			catch (Exception e)
			{
				System.out.println(e.getMessage());
			}

			this.temperatura = temperatura;
		}
		else
		{
			System.out.println("Ar Condicionado Desligado!");
		}
	}

}
