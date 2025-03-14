package exercicios2;

import java.util.Scanner;

public class planoDeSaude
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		while (true)
		{
			System.out.print("Digite seu Nome: ");
			String nome = scanner.nextLine();

			System.out.print("Digite sua Idade: ");
			int idade = scanner.nextInt();

			if (idade <= 10)
				System.out.print("R$30,00");
			else if (idade > 10 && idade <= 29)
				System.out.print("R$60,00");
			else if (idade > 29 && idade <= 45)
				System.out.print("R$120,00");
			else if (idade > 45 && idade <= 59)
				System.out.print("R$150,00");
			else if (idade > 59 && idade <= 65)
				System.out.print("R$250,00");
			else
				System.out.print("R$400,00");

			System.out.println("\n");

			scanner.nextLine();
		}
	}

}
