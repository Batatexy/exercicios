package exercicios06_Contas;

import java.util.Scanner;

public class Conta
{
	private int numero;
	private int agencia;
	private String senha;
	private double saldo;

	private int numeroContas = 0;

	public Conta(int agencia, String senhaString)
	{
		this.numeroContas++;
		this.numero = (int) (Math.random() * 10000);
		this.saldo = 0;

		this.agencia = agencia;
		this.senha = senhaString;
	}

	public double saca(double valor)
	{
		if (this.saldo > valor)
		{
			this.saldo -= valor;
			return valor;
		}
		else
		{
			if (this.saldo == 0)
			{
				System.out.println("Seu Saldo da Conta é " + this.saldo);
				return 0;
			}
			
			Scanner scanner = new Scanner(System.in);

			System.out.println("O Valor(" + valor + ") é Maior que o Saldo(" + this.saldo + "), deseja sacar tudo? (s/n)");
			String resposta = scanner.nextLine();
			scanner.close();

			if (resposta.equals("s"))
			{
				double auxiliar = this.saldo;
				this.saldo -= this.saldo;
				return auxiliar;
			}
		}

		return 0;
	}

	public void deposita(double valor)
	{
		this.saldo += valor;
	}

	public void transfere(double valor, int numeroConta)
	{
		Pessoa.pessoas.forEach(pessoa ->
		{
			System.out.println("222");

			if (pessoa.getConta() != null && pessoa.getConta().getNumero() == numeroConta)
			{
				double transferir = saca(valor);

				if (transferir > 0)
					pessoa.getConta().deposita(transferir);

				return;
			}
		});
	}

	public void imprime()
	{
		System.out.println("Numero: " + this.numero);
		System.out.println("Agencia: " + this.agencia);
		System.out.println("Saldo: " + this.saldo + "\n");
	}

	public int getNumeroContas()
	{
		return numeroContas;
	}

	public int getNumero()
	{
		return this.numero;
	}

}
