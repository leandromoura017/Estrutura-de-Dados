import Pilha from '../src/Pilha.js';
import { trocarTopoBase } from '../src/PilhaQuest03.js';

test('Troca o topo com a base da pilha', () => {
  const pilha = new Pilha();
  pilha.push('A');
  pilha.push('B');
  pilha.push('C');

  trocarTopoBase(pilha);

  expect(pilha.pop()).toBe('A');
  expect(pilha.pop()).toBe('B');
  expect(pilha.pop()).toBe('C');
});
