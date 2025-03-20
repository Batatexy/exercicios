package exercicios10_JogoDeCorrida;

public class Main
{

	public static void main(String[] args)
	{
		Veiculo CB1000R = new Moto(200, 1000, "1000 Cilindradas", "Gasolina");
		Corredor Jeremias = new Corredor();

		Veiculo Camaro = new Carro(200, 1000, 4, "V8", "Gasolina");
		Corredor Carlos = new Corredor();

		Veiculo Monark = new Bicicleta(36);
		Corredor Bruno = new Corredor();

		CB1000R.setVelocidadeAtual(70);
		Camaro.setVelocidadeAtual(60);
		Monark.setVelocidadeAtual(30);

		Jeremias.correr(CB1000R);
		Carlos.correr(Camaro);
		Bruno.correr(Monark);
	}

}
