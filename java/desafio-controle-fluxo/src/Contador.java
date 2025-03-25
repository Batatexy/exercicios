import java.util.Scanner;

// Informação: eu não soube realizar a atividade da maneira que deveria ser realizada, 
// mas eu consegui executá-la com os conhecimento que detenho

public class Contador {
	public static void main(String[] args) {
		Scanner terminal = new Scanner(System.in);
		System.out.println("Digite o primeiro parâmetro");
		int parametroUm = terminal.nextInt();
		System.out.println("Digite o segundo parâmetro");
		int parametroDois = terminal.nextInt();

		// chamando o método contendo a lógica de contagem
		contar(parametroUm, parametroDois);
	}

	static void contar(int parametroUm, int parametroDois) {
		if (ParametrosInvalidosException(parametroUm, parametroDois)) {
			int contagem = parametroDois - parametroUm;
			// realizar o for para imprimir os números com base na variável contagem
			for (int i = 1; i <= contagem + 1; i++) {
				System.out.println("Imprimindo o número " + i);
			}
		} else {
			// imprimir a mensagem: O segundo parâmetro deve ser maior que o primeiro
			System.out.println("O segundo parâmetro deve ser maior que o primeiro");
		}
	}

	static boolean ParametrosInvalidosException(int parametroUm, int parametroDois) {
		// validar se parametroUm é MAIOR que parametroDois e lançar a exceção
		if (parametroUm > parametroDois) {
			return false;
		} else {
			return true;
		}
	}
}