import Deque from '../src/PilhaQuest05';

test('Funciona tudo certo com as inserções e remoções', () => {
    const deque = new Deque();

    deque.inserirFim(1);      // [1]
    deque.inserirInicio(2);   // [2, 1]
    deque.inserirFim(3);      // [2, 1, 3]
    deque.inserirInicio(4);   // [4, 2, 1, 3]

    expect(deque.removerInicio()).toBe(4);  // [2, 1, 3]
    expect(deque.removerFim()).toBe(3);     // [2, 1]

    expect(deque.toArray()).toEqual([2, 1]);
});
