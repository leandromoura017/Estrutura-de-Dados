import { PilhaDePratos } from '../src/PilhaQuest08.js';

test('Empilha e desempilha corretamente', () => {
    const pilhas = new PilhaDePratos(3);

    pilhas.empilha(5);
    pilhas.empilha(10);
    pilhas.empilha(15);
    pilhas.empilha(20);

    expect(pilhas.desempilha()).toBe(20);
    expect(pilhas.desempilha()).toBe(15);
});
