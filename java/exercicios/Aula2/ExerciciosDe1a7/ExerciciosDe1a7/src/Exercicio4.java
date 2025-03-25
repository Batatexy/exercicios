public class Exercicio4 {
	public static void main(String[] args) {
		int a = 1;
		int b = 3;
		int c = 2;
		
		double delta = (Math.pow(b,2)) - 4*a*c;
		System.out.println("Delta: " + delta);
		
		double a1 = (-b + Math.sqrt(delta)) / (2*a);
		double a2 = (-b - Math.sqrt(delta)) / (2*a);
		
		System.out.println("a1 = " + a1);
		System.out.println("a2 = " + a2);
	}
}