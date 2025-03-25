package exercicios09_MaquinaDeGuloseima;

import ConsoleColors.Colors;

public class ExceptionsSaldoInsuficiente extends RuntimeException
{
	public ExceptionsSaldoInsuficiente()
	{
		super(Colors.RED_BOLD_BRIGHT + "Saldo Insuficiente!" + Colors.WHITE);
	}
}