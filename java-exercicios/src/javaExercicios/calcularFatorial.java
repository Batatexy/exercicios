package javaExercicios;

public class calcularFatorial
{

	public static void main(String[] args)
	{
		// 21! é o Máximo
		System.out.println(calcularFatorial(21));

	}

	public static long calcularFatorial(int numero)
	{
		long fatorial = 1;

		for (int i = 1; i < numero; i++)
		{
			fatorial *= i;
		}

		return fatorial;
	}

}
