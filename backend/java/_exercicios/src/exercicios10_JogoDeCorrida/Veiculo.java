package exercicios10_JogoDeCorrida;

public abstract class Veiculo
{
	double velocidadeMaxima;
	double velocidadeAtual;
	int quantidadeRodas;

	public Veiculo(double velocidadeMaxima, int quantidadeRodas)
	{
		this.velocidadeMaxima = velocidadeMaxima;
		this.quantidadeRodas = quantidadeRodas;
		this.velocidadeAtual = 0;
	}

	abstract void mover();

	void setVelocidadeAtual(double velocidadeAtual)
	{
		this.velocidadeAtual = velocidadeAtual;
	}

}
