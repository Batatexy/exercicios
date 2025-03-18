package exercicio6_Contas;

public class Main
{
	public static void main(String[] args)
	{
		Pessoa pessoa1 = new Pessoa("Abner", "123.321.123.32");
		Pessoa pessoa2 = new Pessoa("Gael", "321.321.321.12");

		Pessoa.pessoas.add(pessoa1);
		Pessoa.pessoas.add(pessoa2);

		pessoa2.criarConta(733, "1783");

		pessoa1.imprime();
		pessoa1.criarConta(036, "9472");
		pessoa1.imprime();
		pessoa1.getConta().deposita(100);
		pessoa1.getConta().imprime();
		pessoa1.getConta().transfere(120, pessoa2.getConta().getNumero());

		pessoa2.imprime();
	}
}
