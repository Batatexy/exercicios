package Exercicios03;

public class NumerosPrimos
{
	public static void main(String[] args)
	{
		int numero = 50;

		// Examinar dos número 2 - 50
		for (int i = 2; i <= numero; i++)
		{
			boolean primo = true;

			// Cada número [i], verificar com todos os números necessários antes dele
			for (int j = 2; j <= Math.sqrt(i); j++)
			{
				if (i % j == 0)
				{
					primo = false;
					break;
				}
			}

			if (primo)
				System.out.print(i + " ");
		}

		System.out.println();

		for (int i = 0; i <= 200; i++)
		{
			char c = (char) i;

			System.out.print(c + " ");
		}
	}
}
