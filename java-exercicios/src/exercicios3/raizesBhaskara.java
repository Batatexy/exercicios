package exercicios3;

public class raizesBhaskara
{
	public static void main(String[] args)
	{
		int a = 2;
		int b = 5;
		int c = 3;
		
		double delta = Math.sqrt((b * b) - (4 * a * c));

		double x1 = (delta - b) / (2 * a);
		double x2 = (delta + b) / (2 * a);

		System.out.println("Raiz 1: " + x1);
		System.out.println("Raiz 2: " + x2);
	}
}
