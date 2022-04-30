/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: */

let receberPrimeiroEultimoElemento = (elementos) => {
  const primeiroElemento = elementos.shift();
  const ultimoElemento = elementos.pop();
  return [primeiroElemento, ultimoElemento];
};

console.log(receberPrimeiroEultimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEultimoElemento([-100, "aplicativo", 16]));

let receberElementosDasPontas = (elementos) => {
  return [elementos[0], elementos.length - 1];
};

console.log(receberElementosDasPontas([10, 14, "oooi"]));
console.log(receberElementosDasPontas([-55, "aplicativo", 26]));
