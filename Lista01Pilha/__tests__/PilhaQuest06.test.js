import { infixaParaRPN } from '../src/PilhaQuest06.js';

test('Converte (a+(b*c))', () => {
  expect(infixaParaRPN('(a+(b*c))')).toBe('abc*+');
});

test('Converte ((a+b)*(z+x))', () => {
  expect(infixaParaRPN('((a+b)*(z+x))')).toBe('ab+zx+*');
});

test('Converte ((a+t)*((b+(a+c))^(c+d)))', () => {
  expect(infixaParaRPN('((a+t)*((b+(a+c))^(c+d)))')).toBe('at+bac++cd+^*');
});

test('Converte a+b*c-d', () => {
  expect(infixaParaRPN('a+b*c-d')).toBe('abc*+d-');
});

test('Converte (a+b)+c/d', () => {
  expect(infixaParaRPN('(a+b)+c/d')).toBe('ab+cd/+');
});

test('Converte a*b-(c-d)+e', () => {
  expect(infixaParaRPN('a*b-(c-d)+e')).toBe('ab*cd-e+');
});
