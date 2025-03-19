package exercicio8_Herança;

public class Cobra extends Animal
{
	public Cobra(String nome)
	{
		super(nome);
	}

	@Override
	public void EmitirSom()
	{
		System.out.println("Ssssssssssssssssssssssssssssssssss");
	}
}
