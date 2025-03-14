package exercicios2;

import java.util.Scanner;

public class funcionarioMediaSalarial
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		int quantidadeM = 0;
		int quantidadeF = 0;

		double mediaSalarialM = 0;
		double mediaSalarialF = 0;

		int quantidadeFMenor30 = 0;
		double mediaSalarialFMenor30 = 0;
		
		double mediaSalarial = 0;

		for (int i = 1; i < 999; i++)
		{
			System.out.print("Informe o Sexo: ");
			String genero = scanner.nextLine();

			System.out.print("Informe a Idade: ");
			int idade = scanner.nextInt();

			System.out.print("Informe o Salário Hora: ");
			double salarioHora = scanner.nextDouble();

			System.out.print("Informe as Horas Trabalhadas: ");
			double horasTrabalhadas = scanner.nextDouble();


			if (genero.toLowerCase().equals("m"))
			{
				quantidadeM++;
				mediaSalarialM = (mediaSalarialM + (salarioHora * horasTrabalhadas)) / quantidadeM;
				System.out.print("[Número: " + i + ", Sexo: Masculino" + ", Idade: " + idade + "]");
				System.out.print(" - [Quantidade de Homens: " + quantidadeM + "] ");
			}
			
			else if (genero.toLowerCase().equals("f"))
			{
				quantidadeF++;
				mediaSalarialF = (mediaSalarialF + (salarioHora * horasTrabalhadas)) / quantidadeF;
				System.out.print("[Número: " + i + ", Sexo: Feminino" + ", Idade: " + idade + "]");
				System.out.print(" - [Quantidade de Mulheres: " + quantidadeF);
				System.out.print("] - [Média salarial das Mulheres: " + mediaSalarialF + "] ");

				if (idade < 30)
				{
					quantidadeFMenor30++;
					mediaSalarialFMenor30 = (mediaSalarialFMenor30 + (salarioHora * horasTrabalhadas)) / quantidadeFMenor30;
				}
				
				System.out.print("- [Média salarial das Mulheres com Menos de 30 Anos: " + mediaSalarialFMenor30 + "]");
			}
			
			mediaSalarial = (mediaSalarial + (salarioHora * horasTrabalhadas)) / i;
			System.out.println("\n[Média Salárial: " + mediaSalarial + "]\n");
			scanner.nextLine();
		}

	}
}
