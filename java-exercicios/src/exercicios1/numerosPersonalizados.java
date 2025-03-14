package exercicios1;

public class numerosPersonalizados
{
	public static void main(String[] args)
	{
		System.out.println("Números de 100 a 1000:");
		for (int i = 100; i <= 1000; i++)
		{
			if (i % 100 == 0 && i != 100)
			{
				System.out.println();
			}

			System.out.print(i + " ");
		}

		System.out.println("\n\nNúmeros Pares de 10 a 500");
		for (int i = 10; i <= 500; i++)
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
	}
}
