package javaExercicios;

public class calcularFatorial
{

	public static void main(String[] args)
	{
		long fatorial = 1;

		// 21! é o Máximo que o double suporta
		for (int i = 2; i < 22; i++)
		{
			System.out.print(fatorial + " x " + i + " = ");
			fatorial *= i;
			System.out.println(fatorial);
		}
	}
}
