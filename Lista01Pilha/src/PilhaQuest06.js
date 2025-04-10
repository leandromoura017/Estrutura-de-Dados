import Pilha from './Pilha.js';

function infixa(expressao) {
    const precedencia = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const resultado = [];
    const operadores = new Pilha();

    for (const token of expressao.replace(/\s+/g, '')) {
        if (/[a-z]/i.test(token)) {
            resultado.push(token);
        } else if (token === '(') {
            operadores.push(token);
        } else if (token === ')') {
            while (!operadores.isEmpty() && operadores.top() !== '(') {
                resultado.push(operadores.pop());
            }
            operadores.pop();
        } else if ('+-*/^'.includes(token)) {
            while (
                !operadores.isEmpty() &&
                operadores.top() !== '(' &&
                precedencia[operadores.top()] >= precedencia[token]
            ) {
                resultado.push(operadores.pop());
            }
            operadores.push(token);
        }
    }

    while (!operadores.isEmpty()) {
        resultado.push(operadores.pop());
    }
    return resultado.join('');
}

export { infixa };
