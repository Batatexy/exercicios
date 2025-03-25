
public class Moto extends Veiculo
{
	private int celindradas;

	public Moto(String marca, String modelo, int ano, int celindradas) 
	{
		super(marca, modelo, ano);
		this.celindradas=celindradas;
	}
	
	public void detalhesVeiculo() 
	{
		System.out.println("Cilindradas:" + this.getCelindradas());
	}
	
	public int getCelindradas() {
		return celindradas;
	}

	public void setCelindradas(int celindradas) {
		this.celindradas = celindradas;
	}
	
	

}
