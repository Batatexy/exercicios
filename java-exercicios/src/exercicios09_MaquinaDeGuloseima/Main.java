package exercicios09_MaquinaDeGuloseima;

public class Main
{

//	Faça o tratamento usando exceções para as seguintes condições:
//		a - Tentar comprar um produto cujo índice ainda não tenha sido adiciona.
//		    Lançar uma exceção de runtime ProdutoIndisponivel (>0 e <lenght) e null
//		    
//		b - Tentar adicionar 6 produtos na máquina
//		    Lançar uma exceção de runtime EspacoInsuficiente (<0 ou >lenght) add
//
//		c - Tentar comprar um produto sem saldo suficiente. 
//		    Lançar uma exceção de runtime SaldoInsuficiente
//
//		d - Tentar comprar um produto fora do índice dos produtos
//		    Lançar uma exceção de runtime ProdutoInexistente (<0 ou >lenght) comprar
//
//		Todas as exceções devem ser tratadas no main, com isso todas as mensagens também devem ser 
//		apresentadas somente no main.

	public static void main(String[] args)
	{
		DezReais dezReais = new DezReais();
		DoisReais doisReais = new DoisReais();
		CincoReais cincoReais = new CincoReais();

		Produto batata = new Produto(4, "Batata Épica");
		Produto doritos = new Produto(4.50, "Triangulo Insano");
		
		Produto[] produtos = { null, null, null, null, null };
		MaquinaDeGuloseimas maquinaDeGuloseimas = new MaquinaDeGuloseimas(produtos);
		
		maquinaDeGuloseimas.addProduto(doritos);
		maquinaDeGuloseimas.addProduto(doritos);
		
		
		
		// Produto Indisponivel
		try
		{
			maquinaDeGuloseimas.comprar(3, cincoReais);
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		
		
		// Espaço Insuficiente
		try
		{
			maquinaDeGuloseimas.addProduto(doritos);
			maquinaDeGuloseimas.addProduto(doritos);
			maquinaDeGuloseimas.addProduto(doritos);
			maquinaDeGuloseimas.addProduto(doritos);
		} 
		catch (Exception e)
		{
			System.out.println(e.getMessage() + "\n");
		}


		for (int i = 0; i < maquinaDeGuloseimas.getProdutos().length; i++)
		{
			if (maquinaDeGuloseimas.getProdutos()[i] != null)
				System.out.print(maquinaDeGuloseimas.getProdutos()[i].getDescricao() + ", R$"
						+ maquinaDeGuloseimas.getProdutos()[i].getValor() + "\n");
		}

		maquinaDeGuloseimas.depositar(dezReais);
		maquinaDeGuloseimas.depositar(cincoReais);
		System.out.println("\nDinheiro na Máquina: R$" + maquinaDeGuloseimas.getDinheiroAcumulado() + "\n");

		System.out.println("Comprar Batata, R$4.0\n");
		
		
		// Saldo Insuficiente
		try
		{
			maquinaDeGuloseimas.comprar(0, doisReais);
		} 
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		

		// Produto Inexistente
		try
		{
			maquinaDeGuloseimas.comprar(-1, cincoReais);
		} 
		catch (Exception e)
		{
			System.out.println(e.getMessage() + "\n");
		}
		
		
		System.out.println("Dinheiro na Máquina: R$" + maquinaDeGuloseimas.getDinheiroAcumulado() + "\n");
	}

}
