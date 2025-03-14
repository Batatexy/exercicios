package exercicios2;

import java.util.Scanner;

public class validacaoDatas
{
	public static void main(String[] args)
	{
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
