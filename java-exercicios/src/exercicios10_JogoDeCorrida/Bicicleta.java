package exercicios10_JogoDeCorrida;

public class Bicicleta extends Veiculo
{
	public Bicicleta(double velocidadeMaxima)
	{
		super(velocidadeMaxima, 2);
	}

	@Override
	void mover()
	{
		System.out.println("Veiculo: Bicicleta, Velocidade Atual:" + velocidadeAtual + "Km/h");
	}

}
