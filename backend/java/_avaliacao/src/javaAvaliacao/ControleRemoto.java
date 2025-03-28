package javaAvaliacao;

import java.util.ArrayList;

public class ControleRemoto
{
	private int bateria;
	private ArrayList<Dispositivo> dispositivosConectados;

	public ControleRemoto(int bateria)
	{
		this.bateria = bateria;
		dispositivosConectados = new ArrayList<Dispositivo>();
	}

	public void adicionarDispositivo(Dispositivo dispositivo)
	{
		this.dispositivosConectados.add(dispositivo);
	}

	public void removerDispositivo(int posicao)
	{
		this.dispositivosConectados.remove(posicao);
	}

	public Dispositivo getDispositivo(int id) throws ValorInvalido
	{
		try
		{
			for (Dispositivo dispositivo : dispositivosConectados)
			{
				if (dispositivo.getId() == id)
					return dispositivo;
			}

			throw new ValorInvalido();
		} 
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		
		return null;
	}

	public String getDispositivosConectados()
	{
		String dispositivosString = "";

		for (Dispositivo dispositivo : dispositivosConectados)
		{
			dispositivosString += dispositivo.getNome() + ", ";
		}

		return dispositivosString;
	}
}
