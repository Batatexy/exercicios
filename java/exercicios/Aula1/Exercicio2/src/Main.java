public class Main{
	public static void main(String[] args) {
		
		double saldo = 100;
				
		System.out.println("Saldo: R$" + saldo + "\n");
				
		saldo=saque(saldo, 10);
		System.out.println("Saldo: R$" + saldo + "\n");

		saldo=deposito(saldo, 50);
		System.out.println("Saldo: R$" + saldo + "\n");
				
	}		
	
	public static double saque(double saldo, int valor) {
		if (saldo >= valor){
			System.out.println("Sacando: R$" + valor);
			return saldo - valor;
		}
		else
		{
			System.out.println("Você não possui o valor necessário");
			return saldo;
		}
	}
	
	public static double deposito(double saldo, int valor) {
		saldo += descontarTaxa(valor, 0.1);
		return saldo;
	}
	
	//Métodos auxiliares:
	
	private static double descontarTaxa(double valor, double valorTaxa) {
		double taxa = valor * valorTaxa;
		System.out.println("Depositando: R$" + valor + "\ncom taxa de 1%: R$" + (valor - taxa) + ".");
		return valor - taxa;
	}
	
}

