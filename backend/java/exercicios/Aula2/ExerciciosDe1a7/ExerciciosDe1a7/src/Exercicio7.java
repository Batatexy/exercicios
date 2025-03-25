public class Exercicio7 {
	public static void main(String[] args) {
		
		int valor = 2;
		int potencia = 4;
		int resultado = valor;
		
		for (int i = 1; i < potencia; i++) {
			resultado *= valor;
		}
		
		System.out.println(valor + " * " + potencia + " = " + resultado);
	}
}