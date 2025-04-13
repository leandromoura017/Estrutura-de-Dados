import FilaCaminhoes from '../src/PilhaQuest03';

test('Gerencia a chegada e saída', () => {
    const fila = new FilaCaminhoes();

    fila.chegada('Leandro');
    fila.chegada('Lara');
    fila.chegada('Eliange');

    expect(fila.listarCaminhoes()).toEqual(['Leandro', 'Lara', 'Eliange']);
    expect(fila.saida()).toBe('Leandro');
    expect(fila.listarCaminhoes()).toEqual(['Lara', 'Eliange']);
    expect(fila.estaVazia()).toBe(false);
});

test('Ver se o carregamento completo', () => {
    const fila = new FilaCaminhoes();

    for (let i = 1; i <= 10; i++) {
        fila.chegada(`Caminhoneiro ${i}`);
    }

    expect(fila.carregamentoCompleto()).toBe(true);
    expect(() => fila.chegada('Extra')).toThrow("Limite do dia ja atingio");
});
