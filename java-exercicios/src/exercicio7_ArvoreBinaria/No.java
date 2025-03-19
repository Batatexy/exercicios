package exercicio7_ArvoreBinaria;

public class No
{
	No esquerda;
	No direita;
	int dado;

	public No(int dado)
	{
		this.dado = dado;
	}

	public void inserir(int dado)
	{
		// Número menor, Nó da Esquerda
		if (dado <= this.dado)
		{
			// Se já tiver um dado, repete o processo
			if (esquerda != null)
			{
				esquerda.inserir(dado);
			}
			// Senão, Insere um novo dado
			else
			{
				esquerda = new No(dado);
			}
		}
		// Número maior, Nó da Direita
		else
		{
			// Se já tiver um dado, repete o processo
			if (direita != null)
			{
				direita.inserir(dado);
			}
			// Senão, Insere um novo dado
			else
			{
				direita = new No(dado);
			}
		}
	}

	public void printInOrder()
	{
		// 1º Passo: Vai sempre indo pra esquerda
		if (esquerda != null)
		{
			esquerda.printInOrder();
		}

		// 2º Passo: Após imprimir tudos os nós da esquerda, imprime ele mesmo
		System.out.print(dado + ", ");

		// 3º Passo: Vai sempre indo pra direita
		if (direita != null)
		{
			direita.printInOrder();
		}
	}

	public boolean procurar(int valor)
	{
		if (esquerda != null)
		{
			if (esquerda.procurar(valor))
			{
				return true;
			}
		}

		if (this.dado == valor)
		{
			return true;
		}

		if (direita != null)
		{
			if (direita.procurar(valor))
			{
				return true;
			}
		}

		return false;
	}

	public int somarNos()
	{
		int soma = 0;

		// 1º Passo: Vai sempre indo pra esquerda
		if (esquerda != null)
		{
			soma += esquerda.somarNos();
		}

		// 2º Passo: Após somar todos os nós da esquerda, soma ele mesmo
		soma += dado;

		// 3º Passo: Vai sempre indo pra direita
		if (direita != null)
		{
			soma += direita.somarNos();
		}

		return soma;
	}
}
