import Pilha from './Pilha.js';

function removeDuplicadas(pilhaLista) {
    const pilhaOriginal = new Pilha(pilhaLista.length);
    pilhaLista.forEach(e => pilhaOriginal.push(e));

    const aux = new Pilha(pilhaLista.length);
    const vistos = new Set();

    while (!pilhaOriginal.isEmpty()) {
        const elemento = pilhaOriginal.pop();
        if (!vistos.has(elemento)) {
            aux.push(elemento);
            vistos.add(elemento);
        }
    }

    const resultado = [];
    while (!aux.isEmpty()) {
        resultado.push(aux.pop());
    }

    return resultado;
}

export { removeDuplicadas };
