package src;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ControlePonto 
{
	public void registrarEntrada(Funcionario funcionario)
	{
		gerarComprovante(funcionario,true);
	}
	
	public void registrarSaida(Funcionario funcionario)
	{
		gerarComprovante(funcionario,false);
	}
	
	private String emitirDataHora(Funcionario funcionario)
	{
		LocalDateTime data = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/mm/yy HH:mm:ss");
		String dataFormatada = data.format(formatter);
		
		return dataFormatada;
	}
	
	private String verificarTipo(Funcionario funcionario)
	{
		if (funcionario instanceof Vendedor)
			return "Vendedor";
		else if (funcionario instanceof Consultor)
			return "Consultor";
		else if (funcionario instanceof Gerente)
			return "Gerente";
		else
			return "Inválido";
	}
	
	private void gerarComprovante(Funcionario funcionario, boolean entrada)
	{
		String tipoEntrada = entrada ? "Entrada" : "Saida"; //Operador Ternario
		
		System.out.println("Nome: " + funcionario.getNome());
		System.out.println("Cargo: " + verificarTipo(funcionario));
		System.out.println(tipoEntrada + "em" + emitirDataHora(funcionario));
	}
}
