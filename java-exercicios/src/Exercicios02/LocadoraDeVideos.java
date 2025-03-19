package Exercicios02;

public class LocadoraDeVideos
{
	static int quantidadeFilmes = 1000;
	static double valorLocacao = 50.00;

	public static void main(String[] args)
	{
		System.out.println("Quantidade de Filmes: " + quantidadeFilmes + "\n");

		System.out.println("Faturamento Anual: R$" + faturamentoAnual());
		System.out.println("Faturamento De Multas: R$" + faturamentoMultas(49.93));

		reposicao();

		System.out.println("\nQuantidade de Filmes: " + quantidadeFilmes);
	}

	public static void reposicao()
	{
		double porcentagemFilmesEstragados = 0.02;
		// Estragaram
		quantidadeFilmes -= quantidadeFilmes * porcentagemFilmesEstragados;

		// Comprados
		double porcentagemFilmesComprados = 0.10;
		quantidadeFilmes += quantidadeFilmes * porcentagemFilmesComprados;
	}

	public static double faturamentoMultas(double valorMulta)
	{
		double porcentagemFilmesAtrasados = 0.10;
		return quantidadeFilmes * porcentagemFilmesAtrasados * valorMulta;
	}

	public static double faturamentoAnual()
	{
		double porcentagemFilmesAlugados = 0.33;
		return quantidadeFilmes * porcentagemFilmesAlugados * valorLocacao * 12;
	}
}
