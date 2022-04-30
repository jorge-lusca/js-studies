/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/

ConverterIdadeEmDias = (idade) => {
  return `${365 * idade} dias`;
};

function converterIdadeEmAnosParaDias(idadeEmAnos) {
  const diasDoAno = 365;
  return diasDoAno * idadeEmAnos;
}

console.log(ConverterIdadeEmDias(25));
