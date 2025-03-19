package Exercicios02;

import java.util.Scanner;

public class HotelPraias
{

	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		// Praias
		String nome = "";
		double media = 0;
		int quantidadePraias = 0;

		while (!(nome.toLowerCase().equals("zzz")))
		{
			System.out.print("Digite o Nome da Praia: ");
			nome = scanner.nextLine();

			System.out.print("Digite o Distância da Praia(Km): ");
			int distancia = scanner.nextInt();
			scanner.nextLine();

			media += distancia;
			quantidadePraias++;

			media /= quantidadePraias;

			if (distancia > 10 && distancia < 15)
			{
				System.out.println("A Praia está entre 10Km e 15Km de Distância!");
			}

			System.out.println("Média das Distâncias de Praias: " + media + "\n");
		}

	}

}
