package exercicios09_MaquinaDeGuloseima;

public class Main
{

	public static void main(String[] args)
	{
		DezReais dezReais = new DezReais();
		DoisReais doisReais = new DoisReais();
		CincoReais cincoReais = new CincoReais();

		Produto batata = new Produto(4, "Batata Épica");
		Produto doritos = new Produto(4.50, "Triangulo Insano");
		MaquinaDeGuloseimas maquinaDeGuloseimas = new MaquinaDeGuloseimas(batata);
		maquinaDeGuloseimas.addProduto(doritos);

		for (int i = 0; i < maquinaDeGuloseimas.getProdutos().size(); i++)
		{
			System.out.print(maquinaDeGuloseimas.getProdutos().get(i).getDescricao() + ", R$" + maquinaDeGuloseimas.getProdutos().get(i).getValor() + "\n");
		}

		maquinaDeGuloseimas.depositar(dezReais);
		maquinaDeGuloseimas.depositar(cincoReais);
		System.out.println("\nDinheiro na Máquina: R$" + maquinaDeGuloseimas.getDinheiroAcumulado() + "\n");

		System.out.println("Comprar Batata, R$4.0");
		maquinaDeGuloseimas.comprar(0, cincoReais);
		System.out.println("Dinheiro na Máquina: R$" + maquinaDeGuloseimas.getDinheiroAcumulado() + "\n");
	}

}
