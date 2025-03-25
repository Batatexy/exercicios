package Exercicio1;
import java.util.ArrayList;

public class PessoaJuridica {
	private ArrayList<Endereco> endereco;
	private ArrayList<Contato> contato;
	private String razãoSocial;
	private String cnpj;
	
	
	
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
	
	
	public String getRazãoSocial() {
		return razãoSocial;
	}
	public void setRazãoSocial(String razãoSocial) {
		this.razãoSocial = razãoSocial;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
}
