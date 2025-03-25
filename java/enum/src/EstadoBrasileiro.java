public enum EstadoBrasileiro {
    saoPaulo("SP", "São Paulo"),
    rioJaneiro("RJ", "Rio de Janeiro"),
    piau("PI", "Piauí"),
    maranhao("MA", "Maranhão");

    private String nome;
    private String sigla;

    private EstadoBrasileiro(String sigla, String nome) {
        this.sigla = sigla;
        this.nome = nome;
    }

    public String getSigla() {
        return sigla;
    }

    public String getNome() {
        return nome;
    }

    public String getNomeMaiusculo() {
        return nome.toUpperCase();
    }
}