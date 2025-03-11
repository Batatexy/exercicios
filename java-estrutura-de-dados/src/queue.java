public class queue
{
	private node previous;
	private node lastRemoveNode;
	private commonMethods commonMethods = new commonMethods();

	public void print()
	{
		commonMethods.print(previous);
	}
}
