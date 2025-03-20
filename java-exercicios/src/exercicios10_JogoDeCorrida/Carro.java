package exercicios10_JogoDeCorrida;

public class Carro extends VeiculoMotorizado
{


	public Carro(double velocidadeMaxima, int quantidadeRodas, double quantidadeCombustivel, String motor, String tipoCombustivel)
	{
		super(velocidadeMaxima, quantidadeRodas, quantidadeCombustivel, motor, tipoCombustivel);
	}

	@Override
	void mover()
	{
		System.out.println("Veiculo: Carro, Velocidade Atual:" + velocidadeAtual + "Km/h");
	}
}
