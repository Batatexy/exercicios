public class Pilha {
    private No refNoEntradaPilha;

    public Pilha(){
        this.refNoEntradaPilha = null;
    }

    public void push(No novoNo){
        No refAuxiliar = refNoEntradaPilha;
        refNoEntradaPilha = novoNo;
        refNoEntradaPilha.setRefNo(refAuxiliar);
    }

    //Metodo top retorna a referencia, não exclui ninguem só mostra oq tem no topo
    public No top(){
        return refNoEntradaPilha;
    }

    public No pop(){
        if(!this.isEmpty()){
            No noPoped = refNoEntradaPilha;
            refNoEntradaPilha = refNoEntradaPilha.getRefNo();
            return noPoped;
        }
        return null;
    }

    public boolean isEmpty(){
        // "null" se estiver nulo ent "? true" se não ":" retorne "false"
        return refNoEntradaPilha == null ? true : false;
    }

    @Override
    public String toString(){
        String stringRetorno = "-------------\n";
        stringRetorno += "   Pilha\n";
        stringRetorno +="-------------\n";
        No noAuxiliar = refNoEntradaPilha;

        while(true){
            if(noAuxiliar != null){
                stringRetorno+="[No{dado=" + noAuxiliar.getDado() +"}]\n";
                noAuxiliar = noAuxiliar.getRefNo();
            }else{
                break;
            }
        }
        stringRetorno+= "=============\n";
        return stringRetorno;
    }

}
