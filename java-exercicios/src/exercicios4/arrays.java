package exercicios4;

public class arrays
{
	public static void main(String[] args)
	{
		// Exercicio 1
		System.out.println("Exercicio 1: Numeros Aleátórios");
		System.out.print("Array 1: ");
		int array[] = new int[15];

		for (int i = 0; i < array.length; i++)
		{
			array[i] = (int) (Math.random() * 100) + 1;
			printItem(array[i]);
		}
		

		// Exercicio 2
		System.out.print("\n\nExercicio 2: Invertendo um Array\nArray 1: ");
		int invertedArray[] = new int[15];

		for (int i = 0; i < array.length; i++)
			printItem(array[i]);

		System.out.print("\nArray 2: ");

		for (int i = 0; i < array.length; i++)
		{
			invertedArray[i] = array[(array.length - 1) - i];
			printItem(invertedArray[i]);
		}


		// Exercicio 3
		System.out.print("\n\nExercicio 3: Rotacionando um Array\nArray 1: ");

		for (int i = 0; i < array.length; i++)
			printItem(array[i]);

		System.out.print("\nArray 2: ");

		// Rotacionando
		int posicoes = 1;

		for (int i = 0; i < posicoes; i++)
		{
			for (int j = 1; j < array.length; j++)
			{
				int aux = array[j - 1];
				array[j - 1] = array[j];
				array[j] = aux;
			}
		}
		
		
		for (int i = 0; i < array.length; i++)
			printItem(array[i]);
		
		
		// Exercicio 4
		System.out.print("\n\nExercicio 4: Somando um Array\nArray 1: ");

		int soma = 0;
		for (int i = invertedArray.length / 2; i >= 0; i--)
		{
			printItem(invertedArray[i]);
			soma += invertedArray[i];
		}

		System.out.println("- Soma: " + soma);
	}

	static void printItem(int item)
	{
		String espaco = "";

		if (item < 10)
			espaco = "0";

		System.out.print("[" + espaco + item + "] ");
	}

}
