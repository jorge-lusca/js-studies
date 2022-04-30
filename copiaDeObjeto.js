/* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro. */

let removerPropriedade = (objeto, nomeDaPropriedade) => {
  const copia = Object.assign({}, objeto);
  delete copia[nomeDaPropriedade];
  return copia;
};

console.log(
  removerPropriedade(
    {
      id: 20,
      nome: "caneta",
      descricao: "Não preenchido",
    },
    "descricao"
  )
);

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
