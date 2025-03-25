package Exercicios02;

public class TrianguloRetangulo
{
	public static void main(String[] args)
	{
		int tamanho = 6;

		for (int i = 0; i < tamanho; i++)
		{
			for (int j = 0; j <= i; j++)
			{
				System.out.print("#");
			}

			System.out.println();
		}
	}
}
