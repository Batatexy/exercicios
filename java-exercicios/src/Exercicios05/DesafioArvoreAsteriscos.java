package Exercicios05;

public class DesafioArvoreAsteriscos
{
	public static void main(String[] args)
	{
		int tamanho = 5;

		if (tamanho % 2 != 0)
		{
			for (int i = 1; i < tamanho; i += 2)
			{
				String asteriscos = "";

				for (int j = 0; j < i; j++)
				{
					asteriscos += "*";
				}

				System.out.println(asteriscos);
			}

		} 
		else
			System.out.println("Insira um Número Par");
	}
}
