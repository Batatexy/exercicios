
public class main 
{
	public static void main(String[] args) 
	{
		linkedList list = new linkedList();
		
		list.addDataStart("1");
		list.addData("2");
		list.addDataStart("3");
		list.addData("4");
		list.addData("5");
		list.addDataStart("6");
		
		list.print();
		System.out.println();
		System.out.println(list.removeData(3));
		System.out.println();
		list.print();
		
		list.addData("1");
		list.addDataStart("7");
		
		System.out.println();
		System.out.println("=============================================================================================================");
		System.out.println();
		list.print();
	}
}
