package src;

public class Main {
	public static void main(String[] args) 
	{
		Vendedor vendedor = new Vendedor("Gustavo", 7777, 43, 34);
		Gerente gerente = new Gerente("Juan", 7777, 15000);
		Consultor consultor = new Consultor("Pablo", 7777, 25, 80);
		
		System.out.println("Salário do Vendedor:" + vendedor.calcularSalario());
		System.out.println("Salário do Consultor: " + gerente.calcularSalario());
		System.out.println("Salário do Gerente: " + consultor.calcularSalario() + "\n\n\n");
		
		ControlePonto ponto = new ControlePonto();
		
		ponto.registrarEntrada(vendedor);
		ponto.registrarSaida(vendedor);
		
		ponto.registrarEntrada(gerente);
		ponto.registrarSaida(gerente);
		
		ponto.registrarEntrada(consultor);
		ponto.registrarSaida(consultor);
	}
}
