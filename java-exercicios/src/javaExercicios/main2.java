package javaExercicios;

public class main2
{
	public static void main(String[] args)
	{
		System.out.println("Números de 100 a 1000:");
		for (int i = 100 ; i <= 1000 ; i++)
		{
			if (i % 100 == 0 && i != 100)
			{
				System.out.println();
			}

			System.out.print(i + " ");
		}

		System.out.println("\n\nNúmeros Pares de 10 a 500");
		for (int i = 10 ; i <= 500 ; i++)
		{
			if (i % 2 == 0)
			{
				if (i % 100 == 0 && i != 10)
				{
					System.out.println();
				}

				System.out.print(i + " ");
			}
		}

		System.out.println("\n\nRetângulo Personalizado:");

		int largura = 6;
		int altura = 4;

		for (int i = 0 ; i < altura ; i++)
		{
			for (int j = 0 ; j < largura ; j++)
			{
				System.out.print("*");
			}

			System.out.println();
		}

		int numeroDesejado = 6;
		int numeroUm = 0;
		int numeroDois = 1;

		while (numeroDois < numeroDesejado)
		{
			int auxiliar = numeroDois;
			numeroDois += numeroUm;
			numeroUm = auxiliar;

		}

		System.out.println("\n" + numeroUm + " - " + numeroDois);

	}

}

