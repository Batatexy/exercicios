
public class Carro extends Veiculo
{
	public Carro(String marca, String modelo, int ano, int numeroPortas) 
	{
		super(marca, modelo, ano);
		this.numeroPortas=numeroPortas;
	}

	private int numeroPortas;

	public int getNumeroPortas() 
	{
		return numeroPortas;
	}

	public void setNumeroPortas(int numeroPortas) 
	{
		this.numeroPortas = numeroPortas;
	}
	
	public void detalhesVeiculo() 
	{
		System.out.println("Numero de portas:" + this.getNumeroPortas());
	}
}
