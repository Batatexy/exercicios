public class SistemaCadastro {
    public static void main(String[] args) {
        Pessoa pessoa1 = new Pessoa("122352", "ali");
        pessoa1.setNome("Felipe");
        pessoa1.setIdade(21);

        System.out.println(pessoa1.getNome() + " tem " + pessoa1.getIdade() + " anos.");
        System.out.println("CPF: " + pessoa1.getCpf() + " e mora " + pessoa1.getEndereco());

        Pessoa pessoa2 = new Pessoa("2355234", "ali mesmo");
        pessoa2.setNome("Felipe");
        pessoa2.setIdade(21);
        System.out.println(pessoa2.getCpf() + " mora " + pessoa2.getEndereco());

        Pessoa pessoa3 = new Pessoa("7834569", "na casa do krl");
        System.out.println(pessoa3.getCpf() + " mora " + pessoa3.getEndereco());
    }
}
