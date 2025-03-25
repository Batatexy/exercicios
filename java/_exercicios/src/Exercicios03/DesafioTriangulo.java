package Exercicios03;

public class DesafioTriangulo
{
	public static void main(String[] args)
	{
		int numero = 15;

		if (numero % 2 == 0)
			numero--;

		int qntLinhas = (numero / 2) + 1;

//		System.out.println(qntLinhas);
//		for (int i = qntLinhas; i >= 0; i--)
//		{
//			for (int j = 0; j < i; j++)
//			{
//				System.out.print(" ");
//			}
//
//			for (int j = 0; j < 1; j++)
//			{
//				System.out.print("*");
//			}
//
//			System.out.println();
//		}

		for (int i = 1; i <= qntLinhas; i++)
		{
			for (int j = 0; j <= (numero - 1) / 2 - i; j++)
			{
				System.out.print(" ");
			}

			for (int j = 1; j <= (i * 2) - 1; j += 1)
			{
				System.out.print("*");
			}

			System.out.println();
		}
	}
}

//2:1
//1:3
//0:5