package exercicios1;

public class sequenciaFibonacci
{
	public static void main(String[] args)
	{
		System.out.println("\nSequencia de Fibonacci:");

		int numeroDesejado = 54;
		int numeroUm = 0;
		int numeroDois = 1;

		while (numeroUm <= numeroDesejado)
		{
			System.out.print(numeroUm + " ");

			int auxiliar = numeroDois;
			numeroDois += numeroUm;
			numeroUm = auxiliar;
		}
	}
}
