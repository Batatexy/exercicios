package exercicio6_Contas;

import java.util.Scanner;

public class Main2
{


	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);
		
		Pessoa.pessoas.add(new Pessoa("Rogério", "364.564.564-56"));
		Pessoa.pessoas.get(0).criarConta(2342, "34534543564534");
		
		Pessoa.pessoas.add(new Pessoa("Fernando", "833.644.563-74"));

		Pessoa.pessoas.add(new Pessoa("Claudio", "123.646.124-45"));
		Pessoa.pessoas.get(2).criarConta(84256, "43545654756");

		while(true)
		{
			System.out.println("Selecione uma das opções a seguir:");
			System.out.println("1. Cadastrar Pessoa");
			System.out.println("2. Escolher Pessoa");
			
			String escolha = scanner.nextLine();

			// Cadastrar Pessoa
			if (escolha.equals("1"))
			{
				System.out.println("\nInsira as Informações:");
				System.out.print("Nome: ");
				String nome = scanner.nextLine();

				System.out.print("CPF: ");
				String cpf = scanner.nextLine();

				Pessoa.pessoas.add(new Pessoa(nome, cpf));

				System.out.println("\nPessoa Cadastrada");
				Pessoa.pessoas.get(Pessoa.pessoas.size() - 1).imprime();
			}

			// Escolher Pessoa
			if (escolha.equals("2"))
			{
				System.out.println();

				for (int i = 1; i <= Pessoa.pessoas.size(); i++)
				{
					System.out.println(i + ". " + Pessoa.pessoas.get(i - 1).getNome());
				}

				System.out.println("Escolha uma das Pessoa.pessoas acima:");
				int pessoaEscolhida = scanner.nextInt();
				pessoaEscolhida--;
				scanner.nextLine();

				if (pessoaEscolhida >= 0 && pessoaEscolhida <= Pessoa.pessoas.size())
				{

					// Pessoa Escolhida
					if (Pessoa.pessoas.get(pessoaEscolhida).getConta() != null)
					{
						while (!escolha.equals("0"))
						{
							System.out.println();
							System.out.println(Pessoa.pessoas.get(pessoaEscolhida).getNome());
							Pessoa.pessoas.get(pessoaEscolhida).getConta().imprime();
							System.out.println("Selecione uma das opções a seguir para "
									+ Pessoa.pessoas.get(pessoaEscolhida).getNome() + ":");

							// Criar Conta
							if (Pessoa.pessoas.get(pessoaEscolhida).getConta() == null)
							{
								System.out.println("1. Criar Conta");

								escolha = scanner.nextLine();

								if (escolha.equals("1"))
								{
									System.out.println("\nInsira as Informações:");

									System.out.print("Agencia: ");
									int agencia = scanner.nextInt();
									scanner.nextLine();

									System.out.print("Senha: ");
									String senha = scanner.nextLine();

									System.out.println("\nConta Criada");
									Pessoa.pessoas.get(pessoaEscolhida).criarConta(agencia, senha);
									Pessoa.pessoas.get(pessoaEscolhida).getConta().imprime();
								}
							}
							// Conta Já Existente
							else
							{
								System.out.println("1. Sacar");
								System.out.println("2. Depositar");
								System.out.println("3. Transferir");

								escolha = scanner.nextLine();

								if (!escolha.equals("0"))
								{
									System.out.println("\nInsira o valor: ");
									double valor = scanner.nextInt();
									scanner.nextLine();

									// Sacar
									if (escolha.equals("1"))
										Pessoa.pessoas.get(pessoaEscolhida).getConta().saca(valor);

									// Depositar
									else if (escolha.equals("2"))
										Pessoa.pessoas.get(pessoaEscolhida).getConta().deposita(valor);

									// Transferir
									else if (escolha.equals("3"))
									{
										int numeroConta = scanner.nextInt();
										scanner.nextLine();
										Pessoa.pessoas.get(pessoaEscolhida).getConta().transfere(valor, numeroConta);
									}

									Pessoa.pessoas.get(pessoaEscolhida).getConta().imprime();
								}
								else
								{
									System.out.println();
								}

							}
						}
					}
					else
					{
						System.out.println(Pessoa.pessoas.get(pessoaEscolhida).getNome() + " não tem uma Conta\n");
					}
				} 
				else
				{
					System.out.println();
				}

			}
		}
	}
}
