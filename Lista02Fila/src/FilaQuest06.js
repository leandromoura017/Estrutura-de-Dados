function reverterFila(fila) {
    if (fila.length === 0) return [];

    const elemento = fila.shift(); // Remove o primeiro elemento
    const filaInvertida = reverterFila(fila); // Chamada recursiva
    filaInvertida.push(elemento); // Adiciona no final ao retornar

    return filaInvertida;
}

export default reverterFila;
