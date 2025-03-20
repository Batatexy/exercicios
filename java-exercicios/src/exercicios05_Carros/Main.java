package exercicios05_Carros;

public class Main
{
	public static void main(String[] args)
	{
		Porta[] portas = 
		{ 
			new Porta("Porta de Ferro", true), 
			new Porta("Porta de Ferro", true),
		};
		
		Carro carro = new Carro
		(
			1972,
			portas,
			new Motor("1.2L F4, 1.3L F4"),
			"Volkswagen",
			"Typ 1",
			new Cambio(0,4),
			0
		);

		carro.exibirCaracteristicas();
		carro.exibirEstado();

		System.out.println("carro.abrirOuFecharPorta(0);");
		carro.abrirOuFecharPorta(0);

		System.out.println("carro.acelerar(20);");
		carro.acelerar(20);
		carro.exibirEstado();

		System.out.println("carro.abrirOuFecharPorta(0);");
		carro.abrirOuFecharPorta(0);

		System.out.println("carro.acelerar(40);");
		carro.acelerar(20);
		carro.exibirEstado();

		System.out.println("carro.abrirOuFecharPorta(1);");
		carro.abrirOuFecharPorta(1);
		carro.exibirEstado();

		System.out.println("carro.acelerar(40);");
		carro.acelerar(40);
		carro.exibirEstado();
	}
}
