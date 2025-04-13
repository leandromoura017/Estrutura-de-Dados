class FilaCaminhoes {
    constructor(capacidadeMaxima = 10) {
        this.capacidadeMaxima = capacidadeMaxima;
        this.fila = [];
    }

    chegada(caminhoneiro) {
        if (this.fila.length >= this.capacidadeMaxima) {
            throw new Error("Limite do dia ja atingio");
        }
        this.fila.push(caminhoneiro);
    }

    saida() {
        if (this.estaVazia()) {
            throw new Error("Nao tem caminhoneiro");
        }
        return this.fila.shift();
    }

    estaVazia() {
        return this.fila.length === 0;
    }

    carregamentoCompleto() {
        return this.fila.length >= this.capacidadeMaxima;
    }

    listarCaminhoes() {
        return [...this.fila];
    }
}

export default FilaCaminhoes;
