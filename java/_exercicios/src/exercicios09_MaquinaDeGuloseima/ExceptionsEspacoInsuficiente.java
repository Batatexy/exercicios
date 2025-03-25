package exercicios09_MaquinaDeGuloseima;
import ConsoleColors.Colors;

public class ExceptionsEspacoInsuficiente extends RuntimeException
{
	public ExceptionsEspacoInsuficiente()
	{
		super(Colors.RED_BOLD_BRIGHT + "Espaço Insuficiente!" + Colors.WHITE);
	}
}
