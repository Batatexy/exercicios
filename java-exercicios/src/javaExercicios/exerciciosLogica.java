package javaExercicios;

import java.util.Scanner;

public class exerciciosLogica
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

		Scanner scanner = new Scanner(System.in);

		while (true)
		{
			System.out.println("\n\nInsira um dia do Mês: ");
			int dia = scanner.nextInt();

			System.out.println("Insira um Mês: ");
			int mes = scanner.nextInt();

			System.out.println("Insira um Ano: ");
			int ano = scanner.nextInt();

			if (
					(ano <= 2025 && ((mes == 2 && ano % 4 == 0 && dia <= 29) || (mes == 2 && dia <= 28)))
					||
					((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia <= 30)
					|| 
					((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia <= 31)
				)
				System.out.print("Data Válida: " + dia + "/" + mes + "/" + ano);
			else
				System.out.print("Data Inválida: " + dia + "/" + mes + "/" + ano);
		}


	}

}
