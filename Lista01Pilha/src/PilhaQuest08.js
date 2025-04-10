import Pilha from './Pilha.js';

class PilhaDePratos {
    constructor(capacidadePorPilha) {
        this.capacidade = capacidadePorPilha;
        this.pilhas = [new Pilha(capacidadePorPilha)];
    }

    empilha(valor) {
        let ultima = this.pilhas[this.pilhas.length - 1];
        if (ultima.isFull()) {
            const nova = new Pilha(this.capacidade);
            nova.push(valor);
            this.pilhas.push(nova);
        } else {
            ultima.push(valor);
        }
    }

    desempilha() {
        while (this.pilhas.length > 0) {
            const ultima = this.pilhas[this.pilhas.length - 1];
            if (!ultima.isEmpty()) {
                return ultima.pop();
            } else {
                this.pilhas.pop();
            }
        }
        return null;
    }
}

export { PilhaDePratos };
