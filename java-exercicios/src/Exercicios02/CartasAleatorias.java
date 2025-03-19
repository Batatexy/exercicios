package Exercicios02;

public class CartasAleatorias
{

	public static void main(String[] args)
	{
		for (int i = 0; i < 10; i++)
		{
			cartaAleatoria();
		}
	}

	static void cartaAleatoria()
	{
		int carta = (int) (Math.random() * 13) + 1;
		int naipe = (int) (Math.random() * 4) + 1;

		for (int i = 1; i <= 13; i++)
		{
			if (carta == i && i == 1)
				System.out.print("A");
			else if (carta == i && i == 11)
				System.out.print("J");
			else if (carta == i && i == 12)
				System.out.print("Q");
			else if (carta == i && i == 13)
				System.out.print("K");
			else if (carta == i)
				System.out.print(i);
		}

		if (naipe == 1)
			System.out.print(" de Paus");
		else if (naipe == 2)
			System.out.print(" de Copas");
		else if (naipe == 3)
			System.out.print(" de Espadas");
		else if (naipe == 4)
			System.out.print(" de Ouros");

		System.out.println();
	}

}
