import { PilhFilas } from '../src/PilhaQuest02.js';

test('A fila com a pilha se comporta normal', () => {
    const fila = new PilhFilas();

    fila.enfileira(10);
    fila.enfileira(20);
    fila.enfileira(30);

    expect(fila.frente()).toBe(10);
    expect(fila.desenfileira()).toBe(10);
    expect(fila.desenfileira()).toBe(20);
    expect(fila.frente()).toBe(30);
    expect(fila.desenfileira()).toBe(30);
    expect(fila.estaVazia()).toBe(true);
});
