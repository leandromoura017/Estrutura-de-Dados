const MinHeap = require('../src/HeapQuest01');

describe('Heap Mínimo', () => {
  test('Inserir e extrai mínimo', () => {
    const heap = new MinHeap();

    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(3);

    expect(heap.peek()).toBe(3);

    expect(heap.extractMin()).toBe(3);
    expect(heap.extractMin()).toBe(5);
    expect(heap.extractMin()).toBe(10);
    expect(heap.extractMin()).toBe(20);
    expect(heap.extractMin()).toBe(null);
  });
});