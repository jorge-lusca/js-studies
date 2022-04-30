/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final. */

let cumprimentar = (nome) => {
  return `Olá, ${nome}!`;
};

function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}

console.log(cumprimentar("João"));
