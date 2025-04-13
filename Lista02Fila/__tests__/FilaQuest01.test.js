import { PilhFilas } from '../src/PilhaQuest01.js';

test('A pilha com a fila funciona normal', () => {
    const pilha = new PilhFilas();

    pilha.push(1);
    pilha.push(2);
    pilha.push(3);

    expect(pilha.top()).toBe(3);
    expect(pilha.pop()).toBe(3);
    expect(pilha.pop()).toBe(2);
    expect(pilha.top()).toBe(1);
    expect(pilha.pop()).toBe(1);
    expect(pilha.isEmpty()).toBe(true);
});
