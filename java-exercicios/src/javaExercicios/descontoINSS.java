package javaExercicios;

import java.util.Scanner;

public class descontoINSS
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		while (true)
		{
			System.out.print("Digite seu Salário Mínimo: ");
			double salarioMinimo = scanner.nextDouble();

			if (salarioMinimo <= 600)
				System.out.println("Isento\n");
			else if (salarioMinimo > 600 && salarioMinimo <= 1200)
				System.out.println("Desconto de 20%, R$" + salarioMinimo * 0.8 + "\n");
			else if (salarioMinimo > 1200 && salarioMinimo <= 2000)
				System.out.println("Desconto de 25%, R$" + salarioMinimo * 0.75 + "\n");
			else if (salarioMinimo > 2000)
				System.out.println("Desconto de 30%, R$" + salarioMinimo * 0.7 + "\n");

			scanner.nextLine();
		}
	}
}
