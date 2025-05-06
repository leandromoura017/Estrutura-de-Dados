const verificarVencedores = require('../src/HeapQuest04');

describe('Verifica os vencedores da Mega-sena', () => {
  test('Ver se a sena e a quinta esta correto', () => {
    const sorteados = [3, 15, 22, 28, 33, 40];
    const apostadores = [
      [3, 15, 22, 28, 33, 40], 
      [3, 15, 22, 28, 33, 10], 
      [1, 2, 4, 5, 6, 7],       
      [15, 22, 33, 40, 50, 60, 3, 28], 
      [15, 22, 30, 40, 60, 3, 28],      
    ];

    const resultado = verificarVencedores(sorteados, apostadores);

    expect(resultado.sena).toEqual([0, 3]);
    expect(resultado.quinta).toEqual([1, 4]);
  });
});