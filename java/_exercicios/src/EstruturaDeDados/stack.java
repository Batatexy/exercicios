package EstruturaDeDados;
public class stack
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

	public String removeData()
	{
		node[] nodeArray = commonMethods.removeNode(commonMethods.getSize(previous), previous);
		previous = nodeArray[1];

		return commonMethods.generateNode(nodeArray[0]);
	}

	public void print()
	{
		commonMethods.print(previous);
	}
}
