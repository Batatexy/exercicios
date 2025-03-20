package Exercicios03;

public class NumerosFatoriais
{
	public static void main(String[] args)
	{
		long fatorial = 1;

		// 21! é o Máximo que o double suporta
		for (int i = 2; i < 22; i++)
		{
			String espaco = "";

			if (i < 10)
				espaco = " ";

			System.out.print(i + "! " + espaco + "= " + fatorial + " x " + i + " = ");
			fatorial *= i;
			System.out.println(fatorial);
		}
	}
}
