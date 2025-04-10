import { bemFormado } from '../src/PilhaQuest05.js';

test('Sequência bem construida', () => {
    expect(bemFormado('[ ( ) [ ( ) ] ] ( )')).toBe(true);
});

test('Sequência mal construida', () => {
    expect(bemFormado('( ( ) ]')).toBe(false);
});
