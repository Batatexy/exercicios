package javaExercicios;

import java.util.Scanner;

public class menuEstadoCivil
{

	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		System.out.println("1 - Solteiro(a)");
		System.out.println("2 - Desquitado(a)");
		System.out.println("3 - Casado(a)");
		System.out.println("4 - Divorciado(a)");
		System.out.println("5 - Viúvo(a)");

		while (true)
		{
			String estadoCivil = scanner.nextLine();

			if (estadoCivil.toLowerCase().equals("solteiro"))
				System.out.println("Solteiro(a)");
			else if (estadoCivil.toLowerCase().equals("desquitado"))
				System.out.println("Desquitado(a)");
			else if (estadoCivil.toLowerCase().equals("casado"))
				System.out.println("Casado(a)");
			else if (estadoCivil.toLowerCase().equals("divorciado"))
				System.out.println("Divorciado(a)");
			else if (estadoCivil.toLowerCase().equals("viúvo"))
				System.out.println("Viúvo(a)");
			else
				System.out.println("Erro");
		}
	}

}
