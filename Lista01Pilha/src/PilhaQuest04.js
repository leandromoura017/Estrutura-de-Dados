import Pilha from './Pilha.js';

function decimalParaBinario(numero) {
    const pilha = new Pilha();

    if (numero === 0) return '0';

    while (numero > 0) {
        pilha.push(numero % 2);
        numero = Math.floor(numero / 2);
    }

    let binario = '';
    while (!pilha.isEmpty()) {
        binario += pilha.pop();
    }
    return binario;
}

export { decimalParaBinario };
