/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
 */

let repetirMais = (quantidade) => {
  return Array(quantidade).fill("+").join("");
};

console.log(repetirMais(2));
console.log(repetirMais(4));
