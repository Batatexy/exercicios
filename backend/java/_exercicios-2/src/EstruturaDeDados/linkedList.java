package EstruturaDeDados;
public class linkedList
{
	private node previous;
	private node lastRemoveNode;
	private commonMethods commonMethods = new commonMethods();

	public void addData(String data)
	{
		previous = commonMethods.addNodeEnd(data, previous);
	}

	public void addData(String[] data)
	{
		for (int i = 0; i < data.length; i++)
		{
			addData(data[i]);
		}
	}

	public void addDataStart(String data)
	{
		previous = commonMethods.addNodeStart(data, previous);
	}

	public void addDataStart(String[] data)
	{
		for (int i = 0; i < data.length; i++)
		{
			addDataStart(data[i]);
		}
	}

	public String removeData(long position)
	{
		node[] nodeArray = commonMethods.removeNode(position, previous);
		previous = nodeArray[1];

		return commonMethods.generateNode(nodeArray[0]);
	}

	public void print()
	{
		commonMethods.print(previous);
	}

}
