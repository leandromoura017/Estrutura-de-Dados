import Pilha from './Pilha.js';

function bemFormado(sequencia) {
    const pilha = new Pilha();

    for (const char of sequencia) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')') {
            if (pilha.isEmpty() || pilha.pop() !== '(') return false;
        } else if (char === ']') {
            if (pilha.isEmpty() || pilha.pop() !== '[') return false;
        }
    }
    return pilha.isEmpty();
}

export { bemFormado };
