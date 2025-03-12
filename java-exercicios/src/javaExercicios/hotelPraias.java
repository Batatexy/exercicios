package javaExercicios;

import java.util.Scanner;

public class hotelPraias
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
			System.out.println("Média das Distâncias de Praias: " + media);

			System.out.println("Digite o Nome da Praia:");
			nome = scanner.nextLine();

			System.out.println("Digite o Distância da Praia(Km):");
			int distancia = scanner.nextInt();
			scanner.nextLine();

			media += distancia;
			quantidadePraias++;

			media /= quantidadePraias;

			if (distancia > 10 && distancia < 15)
			{
				System.out.println("A Praia está a mais de 10 Km e Menos que 15Km de Distância\n");
			}

		}

	}

}
