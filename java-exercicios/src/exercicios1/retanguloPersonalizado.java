package exercicios1;

public class retanguloPersonalizado
{
	public static void main(String[] args)
	{
		System.out.println("\n\nRetângulo Personalizado:");

		int largura = 6;
		int altura = 4;

		for (int i = 0; i < altura; i++)
		{
			for (int j = 0; j < largura; j++)
			{
				System.out.print("*");
			}

			System.out.println();
		}
	}
}
