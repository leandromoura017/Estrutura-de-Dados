function verificarVencedores(sorteados, apostadores) {
    const sorteadosSet = new Set(sorteados);
  
    const vencedoresSena = [];
    const vencedoresQuinta = [];
  
    apostadores.forEach((numeros, index) => {
      const acertos = numeros.reduce(
        (count, num) => (sorteadosSet.has(num) ? count + 1 : count),
        0
      );
  
      if (acertos === 6) {
        vencedoresSena.push(index);
      } else if (acertos === 5) {
        vencedoresQuinta.push(index);
      }
    });
  
    return {
      sena: vencedoresSena,
      quinta: vencedoresQuinta,
    };
  }
  
  module.exports = verificarVencedores;