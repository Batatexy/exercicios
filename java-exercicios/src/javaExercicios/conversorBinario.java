package javaExercicios;

public class conversorBinario
{

	public static void main(String[] args){
		System.out.println("1: " + conversor(1));
		System.out.println("2: " + conversor(2));
		System.out.println("3: " + conversor(3));
		System.out.println("4: " + conversor(4));
		System.out.println("18: " + conversor(18));
		System.out.println("3561: " + conversor(3561));
	}

	public static String conversor(int numeroDecimal)
	{
		String numeroBinario = "";
		while (numeroDecimal > 0)
		{
			numeroBinario = numeroDecimal % 2 + numeroBinario;
			numeroDecimal /= 2;
		}

		return numeroBinario;
	}

}