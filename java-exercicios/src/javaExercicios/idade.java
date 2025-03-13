package javaExercicios;

import java.util.Scanner;

public class idade
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

			System.out.print(nome + ", ");

			if (idade < 12)
				System.out.print("Menor de 12 Anos");
			else if (idade >= 12 && idade < 18)
				System.out.print("Menor de Idade");
			else if (idade >= 18)
				System.out.print("Maior de Idade");

			if (idade >= 65)
				System.out.print(" e Maior de 65 anos");

			System.out.println("\n");

			scanner.nextLine();
		}
	}

}
