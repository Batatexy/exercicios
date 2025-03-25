package metodos;

public class usuario {
    public static void main(String[] args) {
        smartTV tv = new smartTV();
        System.out.println("TV Está Ligada: " + tv.ligada);
        System.out.println("Canal Atual: " + tv.canal);
        System.out.println("Volume Atual: " + tv.volume);

        tv.ligar();
        System.out.println("Novo Status: " + tv.ligada);

        tv.avancarCanal();
        System.out.println("Canal atual: " + tv.canal);
    }
}
