package exercicios08_Herança;

public class Cachorro extends Animal
{

	public Cachorro(String nome)
	{
		super(nome);
	}

	@Override
	public void EmitirSom()
	{
		System.out.println("Au au au");
	}
}
