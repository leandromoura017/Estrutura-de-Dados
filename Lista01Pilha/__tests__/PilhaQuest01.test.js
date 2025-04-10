import { inverte } from '../src/PilhaQuest01';

test('Invertendo a palavra ABACAXI', () => {
    expect(inverte('ABACAXI')).toBe('IXACABA');
});
