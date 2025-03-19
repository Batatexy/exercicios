package exercicio7_ArvoreBinaria;

public class Main
{

	public static void main(String[] args)
	{
		No raiz = new No(30);

		raiz.inserir(10);
		raiz.inserir(15);
		raiz.inserir(40);
		raiz.inserir(25);

		System.out.print("Nós: ");
		raiz.printInOrder();
		System.out.println("\n");

		for (int i = 1; i <= 50; i++)
		{
			String zero = "";
			String cor = ConsoleColors.GREEN_BRIGHT;

			if (i < 10)
				zero = "0";

			System.out.print(ConsoleColors.WHITE + zero + i + ": ");

			boolean dado = raiz.procurar(i);

			if (!dado)
				cor = ConsoleColors.RED_BRIGHT;

			System.out.print(cor + dado + ConsoleColors.WHITE + ", ");


			if (dado)
				System.out.print(" ");

			if (i % 10 == 0)
				System.out.println();
		}

		System.out.println("\nSoma dos Nós: " + raiz.somarNos());
	}

}
