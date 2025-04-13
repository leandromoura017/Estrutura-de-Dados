class Pilha {
    constructor() {
        this.itens = [];
    }

    push(item) {
        this.itens.push(item);
    }

    pop() {
        return this.itens.pop();
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

export class PilhFilas {
    constructor() {
        this.pilha1 = new Pilha();
        this.pilha2 = new Pilha();
    }

    enfileira(x) {
        this.pilha1.push(x);
    }

    desenfileira() {
        if (this.pilha2.estaVazia()) {
            while (!this.pilha1.estaVazia()) {
                this.pilha2.push(this.pilha1.pop());
            }
        }

        if (!this.pilha2.estaVazia()) {
            return this.pilha2.pop();
        }

        return null;
    }

    frente() {
        if (this.pilha2.estaVazia()) {
            while (!this.pilha1.estaVazia()) {
                this.pilha2.push(this.pilha1.pop());
            }
        }
        return this.pilha2.topo();
    }

    estaVazia() {
        return this.pilha1.estaVazia() && this.pilha2.estaVazia();
    }
}
