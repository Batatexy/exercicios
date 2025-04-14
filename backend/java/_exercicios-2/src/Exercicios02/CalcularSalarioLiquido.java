package Exercicios02;

public class CalcularSalarioLiquido
{

	public static void main(String[] args)
	{
		double salarioHora = 152.26;
		double horasTrabalhadas = 196.43;
		double descontoINSS = 0.025;
		double salarioLiquido = calcularSalarioLiquido(salarioHora, horasTrabalhadas, descontoINSS);
		System.out.println(salarioLiquido);
	}

	public static double calcularSalarioLiquido(double salarioHora, double horasTrabalhadas, double descontoINSS)
	{
		double salarioBruto = salarioHora * horasTrabalhadas;
		double salarioLiquido = salarioBruto / (descontoINSS * 100);

		return salarioLiquido;
	}

}
