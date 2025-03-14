package exercicios2;

import java.util.Scanner;

public class mediaAluno
{
	static double mediaEscola = 6;

	public static void main(String[] args)
	{
		// Exercicios 3 a 5

		int nota1 = 5;
		int nota2 = 7;
		int nota3 = 6;
		double media = calcularMedia(nota1, nota2, nota3);
		System.out.println("Media: " + media + ", " + validarMedia(media));
		System.out.println(maiorNota(nota1, nota2, nota3));
		System.out.println(menorNota(nota1, nota2, nota3) + "\n");

		// Exercicio 6

		Scanner scanner = new Scanner(System.in);

		while (true)
		{
			System.out.print("Insira a Matricula: ");
			String matricula1 = scanner.nextLine();

			System.out.println("Insira as 3 Notas: ");
			double matricula1Nota1 = scanner.nextDouble();
			double matricula1Nota2 = scanner.nextDouble();
			double matricula1Nota3 = scanner.nextDouble();

			System.out.println(matricula1 + ": " + validarMedia(calcularMedia(matricula1Nota1, matricula1Nota2, matricula1Nota3)) + "\n");
		}

		// Exercicio 6
//		String alunos = "g345345;1.23;5;8/h234242;4;10;7.5/k84835834;6;4.5;1";
//
//		for (int i = 0; i < alunos.split("/").length; i++)
//		{
//			String aluno = alunos.split("/")[i];
//			String matricula = aluno.split(";")[0];
//			double alunoNota1 = Double.valueOf(aluno.split(";")[1]);
//			double alunoNota2 = Double.valueOf(aluno.split(";")[2]);
//			double alunoNota3 = Double.valueOf(aluno.split(";")[3]);
//			System.out.println(matricula + ": " + validarMedia(calcularMedia(alunoNota1, alunoNota2, alunoNota3)));
//		}
	}

	public static String maiorNota(double nota1, double nota2, double nota3)
	{
		if (nota1 >= nota2 && nota1 >= nota3)
			return "Nota 1: " + nota1 + ", é a maior";
		else if (nota2 >= nota1 && nota2 >= nota3)
			return "Nota 2: " + nota2 + ", é a maior";
		else
			return "Nota 3: " + nota3 + ", é a maior";
	}

	public static String menorNota(double nota1, double nota2, double nota3)
	{
		if (nota1 <= nota2 && nota1 <= nota3)
			return "Nota 1: " + nota1 + ", é a menor";
		else if (nota2 <= nota1 && nota2 <= nota3)
			return "Nota 2: " + nota2 + ", é a menor";
		else
			return "Nota 3: " + nota3 + ", é a menor";
	}

	public static double calcularMedia(double nota1, double nota2, double nota3)
	{
		return (nota1 + nota2 + nota3) / 3;
	}

	public static String validarMedia(double media)
	{
		if (media >= mediaEscola)
		{
			return "Aluno Aprovado";
		} else if (media < mediaEscola - 2)
		{
			return "Aluno Reprovado";
		}

		return "Aluno deverá fazer Prova Final";
	}
}
