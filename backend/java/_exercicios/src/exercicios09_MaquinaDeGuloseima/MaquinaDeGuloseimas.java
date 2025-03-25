package exercicios09_MaquinaDeGuloseima;

public class MaquinaDeGuloseimas
{
	private Produto[] produtos;
	private int somador;

	private double dinheiroAcumulado;

	public MaquinaDeGuloseimas(Produto[] produtos)
	{
		this.produtos = produtos;
		this.dinheiroAcumulado = 0;
		this.somador = 0;
	}

	public void depositar(Dinheiro dinheiro)
	{
		dinheiroAcumulado += dinheiro.getValor();
	}

	public void comprar(int indice, Dinheiro dinheiro) throws ExceptionsSaldoInsuficiente, ExceptionsProdutoIndisponivel
	{
		if (indice >= 0 && indice < 4)
		{
			if (produtos[indice] == null)
				throw new ExceptionsProdutoIndisponivel();
		} 
		else
		{
			throw new ExceptionsProdutoInexistente();
		}

		String trocoString = "\n";
		if (dinheiro.getValor() > produtos[indice].getValor())
		{
			dinheiroAcumulado += dinheiro.getValor();
			dinheiroAcumulado -= (dinheiro.getValor() - produtos[indice].getValor());
			double troco = (dinheiro.getValor() - produtos[indice].getValor());

			trocoString = "\nTroco de R$" + troco + "\n";
		}
		else if (dinheiro.getValor() < produtos[indice].getValor())
		{
			throw new ExceptionsSaldoInsuficiente();
		}
		else
		{
			dinheiroAcumulado += dinheiro.getValor();
		}
			
		System.out.println("Compra Bem Sucedida" + trocoString);

	}

	//////////

	public Produto[] getProdutos()
	{
		return this.produtos;
	}

	public void addProduto(Produto produto) throws ExceptionsEspacoInsuficiente
	{
		if (somador > 4)
		{
			throw new ExceptionsEspacoInsuficiente();
		}
		
		this.produtos[somador] = produto;
		somador++;
	}

	public double getDinheiroAcumulado()
	{
		return dinheiroAcumulado;
	}
}
