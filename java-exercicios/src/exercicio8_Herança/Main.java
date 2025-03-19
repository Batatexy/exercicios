package exercicio8_Herança;

public class Main
{

	public static void main(String[] args)
	{
		Animal animalPreHistoricoAnimal = new Animal("???");
		Gato gatoGenerico = new Gato("Jeremias");
		Poodle pudou = new Poodle("Roger");

		animalPreHistoricoAnimal.EmitirSom();
		gatoGenerico.EmitirSom();
		pudou.EmitirSom();
	}

}
