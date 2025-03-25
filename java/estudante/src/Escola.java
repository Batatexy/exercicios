import javafx.scene.paint.Color;

public class Escola {
    public static void main(String[] args) {
        Estudante estudante1 = new Estudante();
        estudante1.nome = "João";
        estudante1.idade = 9;
        estudante1.sexo = Sex.MALE;
        estudante1.cor = Color.FAIR;

        Estudante estudante2 = new Estudante();
        estudante2.nome = "Sophia";
        estudante2.idade = 10;
        estudante2.sexo = Sex.FEMALE;
        estudante2.cor = Color.FAIR;

        Estudante estudante3 = new Estudante();
        estudante3.nome = "Lily";
        estudante3.idade = 9;
        estudante3.cor = Color.DARK;
        estudante3.sexo = Sex.FEMALE;

    }
}
