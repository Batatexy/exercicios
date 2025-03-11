public class linkedList 
{
	private node previous;

	//Adiciona um nó ao final da lista
	public void addData(String data)
	{
		long id = generateId();
		
		//Cria novo nó com a informação passado pelo parametro
		node newNode = new node(data, id);
		
		//Coloca como seu nó anterior o nó que está salvo nesta classe
		newNode.setPrevious(previous);
		
		//Muda o nó anterior da classe para este novo nó criado
		previous = newNode;
	}
	
	//Adiciona um nó no começo da lista
	public void addDataStart(String data)
	{
		//Se não tiver nenhum nó ainda, cria um e finaliza o metodo
		if (previous == null)
		{
			addData(data);
			return;
		}
		
		//Caso já exista, cria um nó auxiliar, salvo com o nó da classe
		node last = previous;
		long id = generateId();
		
		//Fica em while até encontrar o primeiro item da lista
		while (last.getPrevious() != null)
		{
			last = last.getPrevious();
		}
		
		//Cria um nó, colocado na última posição
		node newLast = new node(data, id);
		last.setPrevious(newLast);
	}
	
	//Remover 1 dado baseado na sua posição, começa em 1, da direita para esquerda
	public String removeData(long position)
	{
		if (position > 0)
		{
			node node = previous;
			node deletedNode;
			long size = getSize();
			
			if (position != size)
			{
				//Verifica enquanto o anterior não der nulo
				while (node != null && position != size - 1)
				{
					node = node.getPrevious();
					size--;
				}
				
				deletedNode = node.getPrevious();
				node.setPrevious(node.getPrevious().getPrevious());
			}
			else
			{
				deletedNode = previous;
				previous = previous.getPrevious();
			}
			
			return generateNode(deletedNode);
		}
		
		return null;
	}
	
	//Printar todos os nós com seus respectivos IDs
	public void print()
	{
		//Cria um nó auxiliar, salvo com o nó da classe
		node actualNode = previous;
		
		//Verifica enquanto o anterior não der nulo
		while (actualNode != null)
		{
			System.out.print(generateNode(actualNode));
			
			//Se não for o ultimo item, coloca um - entre os nós
			if (actualNode.getPrevious() != null)
			{
				System.out.print(" - ");
			}
			
			//Muda para o nó anterior
			actualNode = actualNode.getPrevious();
		}
		
		System.out.println();
	}
	
	//Roda todos os nós e devolve o tamanho de elementos
	public long getSize()
	{
		node node = previous;
		long size = 0;
		
		//Verifica enquanto o anterior não der nulo
		while (node != null)
		{
			node = node.getPrevious();
			size++;
		}
		
		return size;
	}
	
	//Verifica todos os nós e gera um novo ID sequencial
	public long generateId()
	{
		node node = previous;
				
		if (node != null)
		{
			long id = 1;
			
			//Verifica enquanto o anterior não der nulo
			while (node != null)
			{
				//Verifica o maior id salvo entre os nós
				if (node.getId() > id)
				{
					//Se o id de algum nó for maior que o já existente, muda o id para ele
					id = node.getId();
				}
				node = node.getPrevious();
			}
			
			//Com o maior ID salvo, o retorno será maior que ele
			return id + 1;
		}
		
		return 1;
	}
	
	//Gera um bloquinho com id e informação do nó
	public String generateNode(node node)
	{
		return "[id:" + node.getId() + " data:"  + node.getData() + "]";
	}
}
