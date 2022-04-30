/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado. */

let repetir = (elemento, quantidade) => {
  array = [];
  for (let i = 0; i < quantidade; i++) array.push(elemento);
  return array;
};

console.log(repetir("código", 2));
console.log(repetir(7, 3));
