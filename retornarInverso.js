/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
...".
Exemplos */

let retornarInverso = (valor) => {
  const tipo = typeof valor;
  if (tipo == "boolean") return !valor;
  else if (tipo == "number") return -valor;
  else return `Booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`;
};

console.log(retornarInverso(true));
console.log(retornarInverso(false));
console.log(retornarInverso(-2000));
console.log(retornarInverso(5));
console.log(retornarInverso("6"));
console.log(retornarInverso("programação"));
