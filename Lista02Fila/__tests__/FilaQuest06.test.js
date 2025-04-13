import reverterFila from '../src/PilhaQuest06';

test('Reverte a fila simples recursivamente', () => {
    const fila = [1, 2, 3, 4];
    const resultado = reverterFila([...fila]);
    expect(resultado).toEqual([4, 3, 2, 1]);
});
