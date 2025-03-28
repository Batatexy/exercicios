package javaAvaliacao;

public class Main
{

	public static void main(String[] args)
	{
		Dispositivo tv1 = new Tv(1243, "Samsumg2sgu72", "Samsung");
		Dispositivo ar1 = new ArCondicionado(7452, "Gree346456", "Gree");
		
		ControleRemoto controle = new ControleRemoto(50);

		controle.adicionarDispositivo(tv1);
		controle.adicionarDispositivo(ar1);

		System.out.println("Dispositivos Conectados: [" + controle.getDispositivosConectados() + "]\n");

		// Tv
		controle.getDispositivo(1243).exibirDetalhes();

		controle.getDispositivo(1243).ajustarConfiguracoes(-50);
		controle.getDispositivo(1243).ligarDesligar();

		controle.getDispositivo(1243).ajustarConfiguracoes(-50);
		controle.getDispositivo(1243).ajustarConfiguracoes(200);
		controle.getDispositivo(1243).ajustarConfiguracoes(65);
		controle.getDispositivo(1243).exibirDetalhes();
		
		System.out.println("\nAr Condicionado:");
		
		// Ar Condicionado
		controle.getDispositivo(7452).exibirDetalhes();

		controle.getDispositivo(7452).ajustarConfiguracoes(10);
		controle.getDispositivo(7452).ligarDesligar();

		controle.getDispositivo(7452).ajustarConfiguracoes(10);
		controle.getDispositivo(7452).ajustarConfiguracoes(50);
		controle.getDispositivo(7452).ajustarConfiguracoes(20);
		controle.getDispositivo(7452).exibirDetalhes();

		controle.removerDispositivo(0);
		controle.removerDispositivo(0);

		System.out.println("\nDispositivos Conectados: [" + controle.getDispositivosConectados() + "]");
	}

}
