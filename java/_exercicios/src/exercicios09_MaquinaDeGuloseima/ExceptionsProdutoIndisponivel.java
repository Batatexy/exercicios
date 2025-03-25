package exercicios09_MaquinaDeGuloseima;

import ConsoleColors.Colors;

public class ExceptionsProdutoIndisponivel extends RuntimeException
{
	public ExceptionsProdutoIndisponivel()
	{
		super(Colors.RED_BOLD_BRIGHT + "Produto Indisponivel!" + Colors.WHITE);
	}
}