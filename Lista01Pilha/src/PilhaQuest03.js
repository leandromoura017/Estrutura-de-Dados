import Pilha from './Pilha.js';

function trocarTopoBase(pilha) {
    if (pilha.isEmpty() || pilha.length() === 1) return;

    const auxiliar = new Pilha(pilha.size);
    const base = pilha.dados[0];
    const topo = pilha.pop();

    for (let i = pilha.length() - 1; i >= 1; i--) {
        auxiliar.push(pilha.dados[i]);
    }

    pilha.clear();
    pilha.push(topo);

    while (!auxiliar.isEmpty()) {
        pilha.push(auxiliar.pop());
    }

    pilha.push(base);
}

export { trocarTopoBase };
