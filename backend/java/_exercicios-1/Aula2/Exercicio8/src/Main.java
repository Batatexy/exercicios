public class Main {
	public static void main(String[] args) {
		int valor=0;
		
		//Criando Agencias:
		Agencia araraquara = new Agencia(187,"Araraquara");
		System.out.println(araraquara.getNome() + ", " + araraquara.getNumero());
		
		Agencia saoCarlos = new Agencia(241,"São Carlos");
		System.out.println(saoCarlos.getNome() + ", " + saoCarlos.getNumero());

		
		
		//Comandos utilizando a Conta:
		System.out.println("\nUtilizando Conta:\n");
		
		
		//Criando a contas:
		Conta contaUm = new Conta(1, 1000, 0);
		Conta contaDois = new Conta(2,2000,0);
		contaUm.setAgencia(araraquara);
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo());
		
		
		//Depositos:
		valor=100;
		contaUm.depositar(valor);
		System.out.println("O valor de " + valor + " foi depositado com sucesso.");
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo() + "\n");
		
		
		//Saques:
		valor=20;
		contaUm.sacar(valor);
		System.out.println("O valor de " + valor + " foi sacado com sucesso.");
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo() + "\n");
		
		valor=200;
		contaUm.sacar(valor);
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo() + "\n");
		
		
		//Transferencias:
		System.out.println("Saldo Conta Dois: " + contaDois.getSaldo());
		contaUm.transferir(50, contaDois);
		System.out.println("Saldo Conta Dois: " + contaDois.getSaldo() + "\n");
		
		
		//Extrato:
		contaUm.imprimirExtrato();
		
		
		
		////////////////////////////////////////////////////////////////////////////////////////
		

		
		System.out.println("\n\n\nUtilizando Cliente:\n");
		
		//Comandos utilizando o Cliente:
		
		
		//Criando Clientes:
		Cliente clienteUm = new Cliente("Gabriel", "238942345");
		Cliente clienteDois = new Cliente("Gabriel", "238942345");
		
		clienteUm.setConta(contaUm);
		System.out.println(clienteUm.getConta());
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo());
		
		
		//Depositos:
		valor=100;
		clienteUm.depositar(valor);
		System.out.println("O valor de " + valor + " foi depositado com sucesso.");
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo() + "\n");
		
		
		//Saques:
		valor=20;
		clienteUm.sacar(valor);
		System.out.println("O valor de " + valor + " foi sacado com sucesso.");
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo() + "\n");
		
		valor=200;
		clienteUm.sacar(valor);
		System.out.println("Saldo Conta Um: " + contaUm.getSaldo() + "\n");
		
		
		//Transferencias:
		System.out.println("Saldo Conta Dois: " + contaDois.getSaldo());
		clienteUm.transferir(50, contaDois);
		System.out.println("Saldo Conta Dois: " + contaDois.getSaldo() + "\n");
		
		
		//Extrato:
		clienteUm.imprimirExtrato();
	}

}
