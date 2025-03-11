public class node 
{
	//Cada nó aponta para o nó anterior
	private node previous;
	
	//Cada nó contem um ID e um dado
	private long id;
	private String data;
	
	//Construtor do nó
	public node(String data, long id)
	{
		this.id = id;
		this.data = data;
	}
	
	//Apenas os métodos necessários são publicos
	public node getPrevious() 
	{
		return previous;
	}

	public void setPrevious(node previous) 
	{
		this.previous = previous;
	}

	public long getId() 
	{
		return id;
	}

	public String getData() 
	{
		return data;
	}
}
