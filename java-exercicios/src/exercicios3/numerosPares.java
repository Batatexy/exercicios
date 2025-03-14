package exercicios3;

import java.util.Scanner;

public class numerosPares
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		while (true)
		{
			System.out.print("Digite um Número: ");
			int numero = scanner.nextInt();

			if (numero % 2 == 0)
				System.out.println("O Número " + numero + " é Par\n");
			else
				System.out.println("O Número " + numero + " é Impar\n");

		}

	}
}
