public class Main {
	public static void main(String[] args) {
		Jogador usuarioUm = new Jogador();
		
		usuarioUm.setNome("Gabriel");
		usuarioUm.setIdade(19);
		usuarioUm.setObjetivos("não reprovar em java");
		
		System.out.println("Olá, meu nome é " + usuarioUm.getNome() + ", tenho " + 
		usuarioUm.getIdade() + " anos e meu objetivo é " + usuarioUm.getObjetivos() + "."); 
	}
}