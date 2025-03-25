import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		Usuario usuarioUm = new Usuario();
		
		usuarioUm.setNome("Vanderley");
		usuarioUm.setCpf("123.456.789-00");
		
		System.out.println(usuarioUm.getNome());
		System.out.println(usuarioUm.getCpf() + "\n");
		
		// Inicialização do array de endereços de dentro da clase usuario
		usuarioUm.setEndereco(new ArrayList<Endereco>());

		
		// Criar objetos auxiliares de endereço para depois add na lista:
		Endereco enderecoUm = new Endereco();
		
		enderecoUm.setLogradouro("Rua ai sla");
		enderecoUm.setCep("4336365");
		enderecoUm.setNumero(12);

		Endereco enderecoDois = new Endereco();
		
		enderecoDois.setLogradouro("Pega a primeira a esquerda");
		enderecoDois.setCep("543564");
		enderecoDois.setNumero(64);
		
		
		// Add na lista de usuários:
		usuarioUm.getEndereco().add(enderecoUm);
		usuarioUm.getEndereco().add(enderecoDois);
		
		// For Comum:
		System.out.println("For comum:");
		for (int i = 0; i < usuarioUm.getEndereco().size();i++) {
			System.out.println(usuarioUm.getEndereco().get(i).getCep());
		}
		
		// Enhanced For:
		// Tipo variavelAuxiliar : referênciaDaOnde
		System.out.println("\nEnhanced For:");
		for (Endereco endereco : usuarioUm.getEndereco()) {
			System.out.println(endereco.getCep());
		}
	}
}