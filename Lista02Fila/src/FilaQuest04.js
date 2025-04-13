function intercalarFilas(fila1, fila2) {
    const resultado = [];
    const maxLength = Math.max(fila1.length, fila2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < fila1.length) resultado.push(fila1[i]);
        if (i < fila2.length) resultado.push(fila2[i]);
    }

    return resultado;
}

export default intercalarFilas;
