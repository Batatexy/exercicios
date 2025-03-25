package Exercicio1;
import java.util.ArrayList;

public class Main {
	public static void main (String[] args) {
		//Criando a primeira pessoa (Pessoa fisica):
		PessoaFisica pessoaUm = new PessoaFisica();
		
		
		//Definir dados básicos da primeira pessoa:
		pessoaUm.setNome("Wagner");
		pessoaUm.setCpf("123.456.789-00");
		pessoaUm.setDataNascimento("11/09/2001");
		
		
		//Definir contatos da primeira pessoa:
		pessoaUm.setContato(new ArrayList<Contato>());
		Contato contatoUm = new Contato();
		contatoUm.setEmail("GeronimosDeAthenas@hotmail.com");
		contatoUm.setTelefone("(17)9974002-8922");
		
		
		//Definir endereco da primeira pessoa:
		pessoaUm.setEndereco(new ArrayList<Endereco>());
		Endereco enderecoUm = new Endereco();
		enderecoUm.setLogradouro("Jardim Bernado de Arruda");
		enderecoUm.setComplemento("apt 2345");
		enderecoUm.setCep("83126");
		
		
		//Printar na tela todos os dados da primeira pessoa:
		System.out.println(pessoaUm.getNome());
		System.out.println(pessoaUm.getCpf());
		System.out.println(pessoaUm.getDataNascimento());
		
		System.out.println(contatoUm.getEmail());
		System.out.println(contatoUm.getTelefone());
		
		System.out.println(enderecoUm.getLogradouro());
		System.out.println(enderecoUm.getComplemento());
		System.out.println(enderecoUm.getCep());
		
		
		
		System.out.println();
		
		
		
		//Criando a segunda pessoa (Pessoa juridica):
		PessoaJuridica pessoaDois = new PessoaJuridica();
		
		
		//Definir dados básicos da segunda pessoa:
		pessoaDois.setCnpj("98.876.543/0001-12");
		pessoaDois.setRazãoSocial("Açougue Do Pedrão");
		
		
		//Definir contatos da segunda pessoa:
		pessoaUm.setContato(new ArrayList<Contato>());
		Contato contatoDois = new Contato();
		contatoDois.setEmail("PedrinhoMatadorGamer123@gmail.com");
		contatoDois.setEmail("(92)732346-0235");
		
		
		//Definir endereco da segunda pessoa:
		pessoaDois.setEndereco(new ArrayList<Endereco>());
		Endereco enderecoDois = new Endereco();
		enderecoDois.setLogradouro("Distrito São Tomé e Príncipe");
		enderecoDois.setComplemento("null");
		enderecoDois.setCep("1073479");
		
		
		//Printar na tela todos os dados da segunda pessoa:
		System.out.println(pessoaDois.getCnpj());
		System.out.println(pessoaDois.getRazãoSocial());
		
		System.out.println(contatoDois.getEmail());
		System.out.println(contatoDois.getTelefone());
		
		System.out.println(enderecoDois.getLogradouro());
		System.out.println(enderecoDois.getComplemento());
		System.out.println(enderecoDois.getCep());
	}
}