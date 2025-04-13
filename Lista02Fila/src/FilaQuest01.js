class Fila {
    constructor() {
        this.itens = [];
    }

    enfileira(item) {
        this.itens.push(item);
    }

    desenfileira() {
        return this.itens.shift();
    }

    frente() {
        return this.itens[0];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }
}

export class PilhFilas {
    constructor() {
        this.fila1 = new Fila();
        this.fila2 = new Fila();
    }

    push(x) {
        this.fila2.enfileira(x);
        while (!this.fila1.estaVazia()) {
            this.fila2.enfileira(this.fila1.desenfileira());
        }

        const temp = this.fila1;
        this.fila1 = this.fila2;
        this.fila2 = temp;
    }

    pop() {
        if (!this.isEmpty()) {
            return this.fila1.desenfileira();
        }
        return null;
    }

    top() {
        return this.fila1.frente();
    }

    isEmpty() {
        return this.fila1.estaVazia();
    }
}
