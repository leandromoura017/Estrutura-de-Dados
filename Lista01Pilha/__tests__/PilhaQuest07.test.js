import { removeDuplicadas } from '../src/PilhaQuest07.js';

test('Remove as duplicadas mais próxima do topo', () => {
  const entrada = [3, 7, 3, 2, 7, 1, 4, 2];
  const esperado = [3, 7, 2, 1, 4];
  expect(removeDuplicadas(entrada)).toEqual(esperado);
});
