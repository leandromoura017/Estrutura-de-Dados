import intercalarFilas from '../src/PilhaQuest04';

test('Intercala as duas filas do tamanho igual', () => {
    const f1 = [1, 3, 5];
    const f2 = [2, 4, 6];
    expect(intercalarFilas(f1, f2)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Intercala as duas filas do tamanho diferente', () => {
    const f1 = [10, 20];
    const f2 = [5, 15, 25, 35];
    expect(intercalarFilas(f1, f2)).toEqual([10, 5, 20, 15, 25, 35]);
});
