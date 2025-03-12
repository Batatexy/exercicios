
public class main
{
	private static commonMethods commonMethods = new commonMethods();
	
	public static void main(String[] args)
	{
		//Lista Encadeada
		System.out.println("Lista Ligada:");
		linkedList list = new linkedList();

		list.addData(new String[] { "Informação", "2", "24534534sad" });
		list.addDataStart("3");

		list.print();
		
		System.out.println("\n" + list.removeData(3) + " - Item 3 Removido\n");

		list.print();
		
		commonMethods.printLine();
		
		//Lista encadeada
		System.out.println("Fila:");
		queue queue = new queue();

		queue.addData(new String[] { "Pessoa 1", "Pessoa 2", "Pessoa 3" });
		queue.addData("Pessoa 4");
		
		queue.print();
		
		System.out.println("\n" + queue.removeData() + " - Removido\n");	
		
		queue.print();
		
		commonMethods.printLine();
		
		//Pilha
		System.out.println("Pilha:");
		stack stack = new stack();

		stack.addData(new String[] { "Tarefa 1", "Tarefa 2", "Tarefa 3" });
		stack.addData("Tarefa 4");
		
		stack.print();
		
		System.out.println("\n" + stack.removeData() + " - Removido\n");	
		
		stack.print();
		
		commonMethods.printLine();
	}

}
