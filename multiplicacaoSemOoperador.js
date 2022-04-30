/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

let multiplicar = (a, b) => {
  let resultado = 0;
  for (let i = 0; i < b; i++) resultado += a;

  return resultado;
};

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log(multiplicar(5, 0));
console.log(multiplicar(5, 2));
