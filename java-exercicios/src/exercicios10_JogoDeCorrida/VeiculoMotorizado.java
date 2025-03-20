package exercicios10_JogoDeCorrida;

public abstract class VeiculoMotorizado extends Veiculo
{
	double quantidadeCombustivel;

	String motor;
	String tipoCombustivel;
	
	public VeiculoMotorizado(double velocidadeMaxima, int quantidadeRodas, double quantidadeCombustivel, String motor, String tipoCombustivel)
	{
		super(velocidadeMaxima, quantidadeRodas);
		this.quantidadeCombustivel = quantidadeCombustivel;
		this.motor = motor;
		this.tipoCombustivel = tipoCombustivel;
	}

	abstract void mover();

	

}
