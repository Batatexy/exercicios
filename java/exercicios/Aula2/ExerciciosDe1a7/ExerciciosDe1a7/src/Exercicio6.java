public class Exercicio6 {
	public static void main(String[] args) {
		double saldo = -1;
		verificar(saldo);
		
		saldo = 1783.12;
		verificar(saldo);
		
		saldo = 2603547.92;
		verificar(saldo);
	}
	
	public static void verificar(double saldo) {
		System.out.println("Seu saldo é de: " + saldo + " reais.");
		
		if (saldo<0) {
			System.out.println("Você está no vermelho! \n");
		}
		else if (saldo<1000000) {
			System.out.println("Você está no azul. \n");
		}
		else
		{
			System.out.println("Você está bem demais! \n");
		}
	}
}