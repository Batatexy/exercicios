package exercicios05_Carros;

public class Carro
{
	private int ano;
	private Porta[] portas;
	private Motor motor;
	private String marca;
	private String modelo;
	private Cambio cambio;
	private int velocidadeAtual;

	public Carro(int ano, Porta[] portas, Motor motor, String marca, String modelo, Cambio cambio, int velocidadeAtual)
	{
		super();
		this.ano = ano;
		this.portas = portas;
		this.motor = motor;
		this.marca = marca;
		this.modelo = modelo;
		this.cambio = cambio;
		this.velocidadeAtual = velocidadeAtual;
	}

	public String portaAbertaOuFechada(int posicao)
	{
		String estado = "";

		if (this.portas[posicao].getEstado())
			estado = "fechada";
		else
			estado = "aberta";

		return estado;
	}

	public void abrirOuFecharPorta(int posicao)
	{
		if (posicao < this.portas.length)
		{
			if (this.velocidadeAtual == 0)
			{
				this.portas[posicao].abrirOuFecharPorta();
				System.out.println("Porta " + (posicao += 1) + " " + portaAbertaOuFechada(posicao -= 1));
			} 
			else
			{
				System.out.println("O carro está em movimento!");
			}
		}
		else
		{
			System.out.println("Insira uma Porta Válida (n<" + this.portas.length + ")");
		}
	}

	public void mudarVelocidade(int novaVelocidade)
	{
		// Verificar se todas as portas estão fechadas
		for (int i = 0; i < this.portas.length; i++)
		{
			if (!this.portas[i].getEstado())
			{
				System.out.println("Feche todas as portas antes de dirigir!");
				return;
			}
		}

		this.velocidadeAtual = novaVelocidade;
		alterarMarcha();
		System.out.println("Velocidade atual: " + velocidadeAtual + " Km/h");

	}

	public void acelerar(int novaVelocidade)
	{
		novaVelocidade = novaVelocidade + this.velocidadeAtual;
		mudarVelocidade(novaVelocidade);
	}

	public void freiar(int novaVelocidade)
	{
		novaVelocidade = novaVelocidade - this.velocidadeAtual;
		mudarVelocidade(novaVelocidade);
	}

	private void alterarMarcha()
	{
		if (this.velocidadeAtual > 0 && this.velocidadeAtual <= 10)
		{
			this.cambio.setMarchaAtual(1);
		} 
		else if (this.velocidadeAtual > 10 && this.velocidadeAtual <= 24)
		{
			this.cambio.setMarchaAtual(2);
		} 
		else if (this.velocidadeAtual > 24 && this.velocidadeAtual <= 36)
		{
			this.cambio.setMarchaAtual(3);
		} 
		else if (this.velocidadeAtual > 36 && this.velocidadeAtual <= 50)
		{
			this.cambio.setMarchaAtual(4);
		} 
		else if (this.velocidadeAtual > 50)
		{
			this.cambio.setMarchaAtual(5);
		}
		else if (this.velocidadeAtual == 0)
		{
			this.cambio.setMarchaAtual(0);
		}
		else if (this.velocidadeAtual < 0)
		{
			this.cambio.setMarchaAtual(-1);
		}
	}

	public void exibirCaracteristicas()
	{
		System.out.println("============================================");
		System.out.println("Quantidade de Portas: " + this.portas.length);
		System.out.println("Motor: " + this.motor.getDescricao());
		System.out.println("Ano: " + this.ano);
		System.out.println("Marca: " + this.marca);
		System.out.println("Modelo: " + this.modelo);
		System.out.println("============================================");
	}

	public void exibirEstado()
	{
		System.out.println("\n============================================");
		System.out.println("Velocidade Atual: " + this.velocidadeAtual + "Km/h");
		System.out.print("Marcha atual: " + this.cambio.getMarchaAtual() + "\n");

		for (int i = 0; i < this.portas.length; i++)
		{
			System.out.println(this.portas[i].getDescricao() + ", porta " + portaAbertaOuFechada(i));
		}

		System.out.println("============================================\n");
	}
}
