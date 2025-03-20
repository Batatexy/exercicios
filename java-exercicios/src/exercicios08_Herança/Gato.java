package exercicios08_Herança;

public class Gato extends Animal
{
	public Gato(String nome)
	{
		super(nome);
	}

	@Override
	public void EmitirSom()
	{
		System.out.println("Miauu");
	}
}
