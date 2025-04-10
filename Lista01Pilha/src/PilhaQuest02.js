const TAMANHO_MAX = 100;
const vetor = new Array(TAMANHO_MAX);

let topoA = -1;
let topoB = TAMANHO_MAX;

function inicializarPilhas() {
    topoA = -1;
    topoB = TAMANHO_MAX;
}

function eVaziaA() {
    return topoA === -1;
}

function eVaziaB() {
    return topoB === TAMANHO_MAX;
}

function empilhaA(elemento) {
    if (topoA + 1 === topoB) {
        throw new Error("Pilha cheia");
    }
    topoA++;
    vetor[topoA] = elemento;
}

function empilhaB(elemento) {
    if (topoB - 1 === topoA) {
        throw new Error("Pilha cheia");
    }
    topoB--;
    vetor[topoB] = elemento;
}

function desempilhaA() {
    if (eVaziaA()) {
        throw new Error("Pilha A vazia");
    }
    const elemento = vetor[topoA];
    topoA--;
    return elemento;
}

function desempilhaB() {
    if (eVaziaB()) {
        throw new Error("Pilha B vazia");
    }
    const elemento = vetor[topoB];
    topoB++;
    return elemento;
}

export {
    inicializarPilhas,
    eVaziaA,
    eVaziaB,
    empilhaA,
    empilhaB,
    desempilhaA,
    desempilhaB,
    vetor
};
