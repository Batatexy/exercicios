package javaExercicios;

public class calcularQuilowatts
{

	public static void main(String[] args)
	{
		int salarioMinimo = 1518;
		double quantidadeQuilowatts = 123;

		System.out.println("Interpretação 1:");
		double interpretacao1 = calcularQuilowatts1(salarioMinimo, quantidadeQuilowatts);
		System.out.println(interpretacao1 + " a ser Pago, com 10% de Desconto: R$" + desconto(interpretacao1) + " a ser Pago");

		System.out.println("\nInterpretação 2:");
		double interpretacao2 = calcularQuilowatts2(salarioMinimo, quantidadeQuilowatts);
		System.out.println(interpretacao2 + " a ser Pago, com 10% de Desconto: R$" + desconto(interpretacao2) + " a ser Pago");
	}

	// Duas interpretações:
	static double calcularQuilowatts1(int salarioMinimo, double quantidadeQuilowatts)
	{
		double precoQuilowatt = (salarioMinimo / 7) / 100;
		System.out.print("[preco de 1 Quilowatt: R$" + precoQuilowatt + "] R$");
		return precoQuilowatt * quantidadeQuilowatts;
	}

	static double calcularQuilowatts2(int salarioMinimo, double quantidadeQuilowatts)
	{
		double precoQuilowatt = 7.24;
		System.out.print("[preco de 1 Quilowatt: R$" + precoQuilowatt + "] R$");
		return precoQuilowatt * quantidadeQuilowatts;
	}

	static double desconto(double valor)
	{
		return valor * 0.9;
	}

}
