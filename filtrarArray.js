/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

let filtrarNumeros = (array) => {
  const resultado = [];
  for (let item of array) if (typeof item === "number") resultado.push(item);

  return resultado;
};

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));

/*---------------------------------------------------------*/

let filterFunction = (array2) => {
  return array2.filter((item) => typeof item === "number");
};

console.log(filterFunction(["Javascript", 1, "3", "Web", 20, 5]));
console.log(filterFunction(["a", "c"]));
