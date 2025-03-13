package javaExercicios;

public class calcularCombustivel
{

	public static void main(String[] args)
	{
		double tempo = 9.65;
		double velocidadeMedia = 160.4;

		double distancia = tempo * velocidadeMedia;
		double litrosUsados = distancia / 12;

		System.out.println(litrosUsados + " litros usados na viagem");
	}

}
