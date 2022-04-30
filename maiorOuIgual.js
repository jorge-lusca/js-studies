/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.
 */

let maiorOuIgual = (a, b) => {
  if (typeof a != typeof b) return false;
  return a >= b;
};

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));
