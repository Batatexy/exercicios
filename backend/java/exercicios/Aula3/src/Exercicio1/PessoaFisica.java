package Exercicio1;
import java.util.ArrayList;

public class PessoaFisica {
	private ArrayList<Endereco> endereco;
	private ArrayList<Contato> contato;
	private String nome;
	private String cpf;
	private String dataNascimento;

	
	public void setContato(ArrayList<Contato> contato) {
		this.contato = contato;
	}
	public ArrayList<Contato> setContato() {
		return contato;
	}

	
	public ArrayList<Endereco> getEndereco() {
		return endereco;
	}
	public void setEndereco(ArrayList<Endereco> endereco) {
		this.endereco = endereco;
	}
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
}
