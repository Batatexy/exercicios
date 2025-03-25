public class Pilha {
    private No refNoEntradaPilha;

    public Pilha() {
        this.refNoEntradaPilha = null;
    }

    public No top(){
        refNoEntradaPilha;
    }

    public void push(No novoNo) {
        No refAuxiliar = refNoEntradaPilha;
        refNoEntradaPilha = novoNo;
        refNoEntradaPilha.setReNo(refAuxiliar);
    }

    public No pop() {
        if (!this.isEmpty()) {
            No noPoped = refNoEntradaPilha;
            refNoEntradaPilha = refNoEntradaPilha.reNo();
        }
        return null;
    }

    public No top() {
        return refNoEntradaPilha;
    }

    public boolean isEmpty() {

        if (refNoEntradaPilha == null) {
            return true;
        } else {
            return false;
        }
    }
}
