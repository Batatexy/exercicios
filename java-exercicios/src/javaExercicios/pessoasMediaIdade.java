package javaExercicios;

import java.util.Scanner;

public class pessoasMediaIdade
{
	public static void main(String[] args)
	{
//		String pessoas = "F012M020";
//		System.out.println(pessoas.substring(0, 1));

		Scanner scanner = new Scanner(System.in);

		int quantidadeM = 0;
		int quantidadeF = 0;

		int mediaIdadeM = 0;
		int mediaIdadeF = 0;

		for (int i = 1; i < 999; i++)
		{
			System.out.print("Informe o Sexo: ");
			String genero = scanner.nextLine();

			System.out.print("Informe a Idade: ");
			int idade = scanner.nextInt();

			if (genero.toLowerCase().equals("m"))
			{
				quantidadeM++;
				mediaIdadeM = (mediaIdadeM + idade) / quantidadeM;
				System.out.print("[Número: " + i + ", Sexo: Masculino" + ", Idade: " + idade + "]");
				System.out.print(" - [Quantidade de Homens: " + quantidadeM);
				System.out.print("] - [Média de idade dos Homens: " + mediaIdadeM + "]");
			}
			
			else if (genero.toLowerCase().equals("f"))
			{
				quantidadeF++;
				mediaIdadeF = (mediaIdadeF + idade) / quantidadeF;
				System.out.print("[Número: " + i + ", Sexo: Feminino" + ", Idade: " + idade + "]");
				System.out.print(" - [Quantidade de Mulheres: " + quantidadeF);
				System.out.print("] - [Média de idade das Mulheres: " + mediaIdadeF + "]");
			}

			System.out.println("\n");
			scanner.nextLine();
		}

	}
}
