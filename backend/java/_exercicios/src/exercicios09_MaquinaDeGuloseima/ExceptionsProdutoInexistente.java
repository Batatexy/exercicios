package exercicios09_MaquinaDeGuloseima;

import ConsoleColors.Colors;

public class ExceptionsProdutoInexistente extends RuntimeException
{
	public ExceptionsProdutoInexistente()
	{
		super(Colors.RED_BOLD_BRIGHT + "Produto Inexistente!" + Colors.WHITE);
	}
}
