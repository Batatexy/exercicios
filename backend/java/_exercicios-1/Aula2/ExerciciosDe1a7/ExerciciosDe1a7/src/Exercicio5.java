public class Exercicio5 {
	public static void main(String[] args) {
		double saldo = 100.0;
		double valorSaque = 10.0;
		
		if (saldo >= valorSaque) {
			saldo -=valorSaque;
			System.out.println("Saque realizado com sucesso");
		}
		else
		{
			System.out.println("Saldo insuficiente");
		}
	}
}