
public class Main 
{
	public static void main(String args[])
	{
		Locadora locadora = new Locadora("Locadora Insana");
		
		Carro carroUm     = new Carro("BMW", "M3", 1985, 4);
		Carro carroDois   = new Carro("Volkswagen", "Gol Bolinha", 1994, 4);
		Carro carroTres   = new Carro("Fiat", "Marea", 1994, 4);
		Carro carroQuatro = new Carro("Fiat", "Uno com escada", 1984, 3);
		
		Moto motoUm   = new Moto("Kawasagi", "Cago", 2001, 200000);
		Moto motoDois = new Moto("Crigo", "Estripper", 2037, 99909909);
		Moto motoTres = new Moto("Yamaha", "YZF R-3", 2023, 321);
		
		locadora.addVeiculo(carroUm);
		
		locadora.listarVeiculos();
	}
}
