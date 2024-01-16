// ARRAY FILTER
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros
  .filter((el) => el % 2 === 0)
  .forEach(numero => console.log(numero));