package exercicios06_Contas;

import java.util.ArrayList;

public class Pessoa
{
	private String nome;
	private String cpf;
	private Conta conta;

	public static ArrayList<Pessoa> pessoas = new ArrayList<>();

	public Pessoa(String nome, String cpf)
	{
		this.nome = nome;
		this.cpf = cpf;
	}

	public void criarConta(int agencia, String senha)
	{
		conta = new Conta(agencia, senha);
	}

	public void imprime()
	{
		System.out.println("Nome: " + this.nome);
		System.out.println("CPF: " + this.cpf);

		if (conta != null)
		{
			this.conta.imprime();
		} else
		{
			System.out.println("Ainda não possui uma Conta\n");
		}

	}

	public Conta getConta()
	{
		return this.conta;
	}

	public String getNome()
	{
		return this.nome;
	}

}
