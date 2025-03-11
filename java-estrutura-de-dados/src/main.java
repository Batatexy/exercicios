
public class main
{

	public static void main(String[] args)
	{
		// Lista encadeada
		linkedList list = new linkedList();

		list.addData(new String[] { "Informação", "2", "24534534sad" });
		list.addDataStart("3");

		list.print();
		System.out.println();
		System.out.println(list.removeData(3) + " - Removido");
		System.out.println();

		list.print();

	}

}
