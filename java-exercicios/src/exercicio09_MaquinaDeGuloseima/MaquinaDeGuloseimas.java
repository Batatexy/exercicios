package exercicio09_MaquinaDeGuloseima;

import java.util.ArrayList;

public class MaquinaDeGuloseimas
{
	private ArrayList<Produto> produtos = new ArrayList<>();
	private double dinheiroAcumulado;

	public MaquinaDeGuloseimas(ArrayList<Produto> produtos)
	{
		this.produtos = produtos;
		this.dinheiroAcumulado = 0;
	}

	public MaquinaDeGuloseimas(Produto produto)
	{
		this.produtos.add(produto);
		this.dinheiroAcumulado = 0;
	}

	
	
	public void depositar(Dinheiro dinheiro)
	{
		dinheiroAcumulado += dinheiro.getValor();
	}

	
	
	public void comprar(int indice, Dinheiro dinheiro)
	{
		String trocoString = "\n";
		if (dinheiro.getValor() > produtos.get(indice).getValor())
		{
			// Sla tem que testar
			dinheiroAcumulado += dinheiro.getValor();
			dinheiroAcumulado -= (dinheiro.getValor() - produtos.get(indice).getValor());
			double troco = (dinheiro.getValor() - produtos.get(indice).getValor());

			trocoString = "\nTroco de " + troco + "\n";
		}
		else if (dinheiro.getValor() < produtos.get(indice).getValor())
		{
			System.out.println("Dinheiro Insuficiente\n");
			return;
		}
		else
		{
			dinheiroAcumulado += dinheiro.getValor();
		}
			
		System.out.println("Compra Bem Sucedida" + trocoString);

	}

	//////////

	public ArrayList<Produto> getProdutos()
	{
		return produtos;
	}

	public void addProduto(Produto produto)
	{
		this.produtos.add(produto);
	}

	public double getDinheiroAcumulado()
	{
		return dinheiroAcumulado;
	}
}
