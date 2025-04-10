import Pilha from './Pilha';

export function inverte(palavra) {
    const pilha = new Pilha();

    for (let letra of palavra) {
        pilha.push(letra);
    }

    let resultado = '';
    while (!pilha.isEmpty()) {
        resultado += pilha.pop();
    }

    return resultado;
}
