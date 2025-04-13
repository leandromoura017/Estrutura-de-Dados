class Deque {
    constructor() {
        this.itens = [];
    }

    inserirInicio(elemento) {
        this.itens.unshift(elemento);
    }

    removerInicio() {
        return this.itens.shift();
    }

    inserirFim(elemento) {
        this.itens.push(elemento);
    }

    removerFim() {
        return this.itens.pop();
    }

    toArray() {
        return [...this.itens];
    }
}

export default Deque;
