// Revisão sobre Funções
// Definindo uma função

// const n1 = 12;
// const n2 = 5;

// function somar() {
//   console.log(n1 + n2);
// }

// FUNÇÃO ANONIMA
// (function() {

// })()

// const subtrair = function() {
//   console.log(n1 - n2);
// }

// const subtrair = () => console.log(n1 - n2);

const conferirEstoque = estoque => {
  if (estoque === "OK") {
    return "Status do Estoque: OK";
  } else if (estoque === "BAIXO") {
    return "Status do Estoque: BAIXO. É necessário repor o estoque.";
  } else if (estoque === "MÉDIO") {
    return "Status do Estoque: MÉDIO. Alerte para repor o estoque.";
  } else {
    return "STATUS INVÁLIDO";
  }
};

console.log(conferirEstoque("BAIXO"));

