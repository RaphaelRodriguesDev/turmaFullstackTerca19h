// ARRAY MAP

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const mapeados = numeros
  .map(el => el % 2)
  .filter(el => el === 0)
  .forEach(el => console.log(el));


