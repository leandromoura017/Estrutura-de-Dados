import {
    inicializarPilhas,
    eVaziaA,
    eVaziaB,
    empilhaA,
    empilhaB,
    desempilhaA,
    desempilhaB
} from '../src/PilhaQuest02.js';

beforeEach(() => {
    inicializarPilhas();
});

test('As pilhas devem começar vazias', () => {
    expect(eVaziaA()).toBe(true);
    expect(eVaziaB()).toBe(true);
});

test('Empilha e desempilha as coisas da pilha A', () => {
    empilhaA('A1');
    empilhaA('A2');
    empilhaA('A3');
    expect(eVaziaA()).toBe(false);
    expect(desempilhaA()).toBe('A3');
    expect(desempilhaA()).toBe('A2');
    expect(desempilhaA()).toBe('A1');
    expect(eVaziaA()).toBe(true);
});

test('Empilha e desempilha as coisas da pilha B', () => {
    empilhaB('B1');
    empilhaB('B2');
    empilhaB('B3');
    expect(eVaziaB()).toBe(false);
    expect(desempilhaB()).toBe('B3');
    expect(desempilhaB()).toBe('B2');
    expect(desempilhaB()).toBe('B1');
    expect(eVaziaB()).toBe(true);
});

test('As pilha A e B compartilham espaço corretamente até encher', () => {
    for (let i = 0; i < 50; i++) {
        empilhaA(`A${i}`);
        empilhaB(`B${i}`);
    }

    expect(() => empilhaA('A_fim')).toThrow("Pilha cheia");
    expect(() => empilhaB('B_fim')).toThrow("Pilha cheia");
});

test('Erro desempilhando a pilha A vazia', () => {
    expect(() => desempilhaA()).toThrow("Pilha A vazia");
});

test('Erro desempilhando pilha B vazia', () => {
    expect(() => desempilhaB()).toThrow("Pilha B vazia");
});
