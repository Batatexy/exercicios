package exercicios10_JogoDeCorrida;

public class Moto extends VeiculoMotorizado
{
	public Moto(double velocidadeMaxima, double quantidadeCombustivel, String motor, String tipoCombustivel)
	{
		super(velocidadeMaxima, 2, quantidadeCombustivel, motor, tipoCombustivel);
	}

	@Override
	void mover()
	{
		System.out.println("Veiculo: Moto, Velocidade Atual:" + velocidadeAtual + "Km/h");
	}

}
