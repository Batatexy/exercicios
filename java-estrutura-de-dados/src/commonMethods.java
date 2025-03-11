public class commonMethods
{

	// Adiciona um Nó ao Final da Lista
	public node addNodeEnd(String data, node lastNode)
	{
		long id = generateId(lastNode);

		// Cria novo nó com a informação passado pelo parametro
		node newNode = new node(data, id);

		// Coloca como seu nó anterior o nó que está salvo nesta classe
		newNode.setPrevious(lastNode);

		// Muda o nó anterior da classe para este novo nó criado
		return newNode;
	}

	// Adiciona um Nó ao Inicio da Lista
	public node addNodeStart(String data, node lastNode)
	{
		// Se não tiver nenhum nó ainda, cria um e finaliza o metodo
		if (lastNode == null)
		{
			addNodeEnd(data, lastNode);
			return null;
		}

		// Caso já exista, cria um nó auxiliar, salvo com o nó da classe
		node last = lastNode;
		long id = generateId(last);

		// Fica em while até encontrar o primeiro item da lista
		while (last.getPrevious() != null)
		{
			last = last.getPrevious();
		}

		// Cria um nó, colocado na última posição
		node newLast = new node(data, id);
		last.setPrevious(newLast);

		return lastNode;
	}

	// Remover 1 dado baseado na sua posição, começa em 1, da direita para esquerda
	public node[] removeNode(long position, node lastNode)
	{
		if (position > 0)
		{
			node node = lastNode;
			node deletedNode;
			long size = getSize(lastNode);

			if (position != size)
			{
				// Verifica enquanto o anterior não der nulo
				while (node != null && position != size - 1)
				{
					node = node.getPrevious();
					size--;
				}

				deletedNode = node.getPrevious();
				node.setPrevious(node.getPrevious().getPrevious());
			} else
			{
				deletedNode = lastNode;
				lastNode = lastNode.getPrevious();
			}

			return new node[] { deletedNode, lastNode };
		}

		return null;
	}

	// Printar todos os nós com seus respectivos IDs
	public void print(node lastNode)
	{
		// Cria um nó auxiliar, salvo com o nó da classe
		node actualNode = lastNode;

		// Verifica enquanto o anterior não der nulo
		while (actualNode != null)
		{
			System.out.print(generateNode(actualNode));

			// Se não for o ultimo item, coloca um - entre os nós
			if (actualNode.getPrevious() != null)
			{
				System.out.print(" - ");
			}

			// Muda para o nó anterior
			actualNode = actualNode.getPrevious();
		}

		System.out.println();
	}

	public long getSize(node lastNode)
	{
		node node = lastNode;
		long size = 0;

		// Verifica enquanto o anterior não der nulo
		while (node != null)
		{
			node = node.getPrevious();
			size++;
		}

		return size;
	}

	// Pega 1 Nó, e devolve uma string tipo assim: [id:2 data:Informação]
	public String generateNode(node node)
	{
		return "[id:" + node.getId() + " data:" + node.getData() + "]";
	}

	// Roda todos os nós e gera um novo ID sequencial
	private long generateId(node node)
	{
		if (node != null)
		{
			long id = 1;

			// Verifica enquanto o anterior não der nulo
			while (node != null)
			{
				// Verifica o maior id salvo entre os nós
				if (node.getId() > id)
				{
					// Se o id de algum nó for maior que o já existente, muda o id para ele
					id = node.getId();
				}
				node = node.getPrevious();
			}

			// Com o maior ID salvo, o retorno será maior que ele
			return id + 1;
		}

		return 1;
	}

}
