import { decimalParaBinario } from '../src/PilhaQuest04.js';

test('Converte 5 para binário', () => {
    expect(decimalParaBinario(5)).toBe('101');
});

test('Converte 22 para binário', () => {
    expect(decimalParaBinario(22)).toBe('10110');
});

test('Converte 35 para binário', () => {
    expect(decimalParaBinario(35)).toBe('100011');
});
