package exercicio8_Herança;

public class Animal
{
	protected String nome;

	public Animal(String nome)
	{
		this.nome = nome;
	}

	public void EmitirSom()
	{
		System.out.println("AAAAAAAAAAAAAAAAAAAAAA - Som Irreconhecivel, pois ainda não foi definido pela Humanidade");
	}

}