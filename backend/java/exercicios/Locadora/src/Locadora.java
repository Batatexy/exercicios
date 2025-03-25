import java.util.ArrayList;

public class Locadora 
{
	private String nome;
	private ArrayList<Veiculo> veiculos;
	
	public Locadora (String nome)
	{
		this.nome = nome;
		this.veiculos = new ArrayList<Veiculo>();
	}

	public void addVeiculo (Veiculo Veiculo)
	{
		this.veiculos.add(Veiculo);
	}
	
	public void listarVeiculos()
	{
		for (Veiculo Veiculo : veiculos)
		{
			Veiculo.detalhesVeiculo();
			System.out.println(" ");
		}
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public ArrayList<Veiculo> getVeiculo() {
		return veiculos;
	}

	public void setVeiculo(ArrayList<Veiculo> veiculos) {
		this.veiculos = veiculos;
	}
}
