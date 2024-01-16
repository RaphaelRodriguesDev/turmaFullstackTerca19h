const numeros = [2, 4, 6, 8, 10];

const total = numeros.reduce((total, el) => total * el);

const totalSoma = numeros.reduce((total, el) => {
  return total + el
}, 100);

console.log(total);