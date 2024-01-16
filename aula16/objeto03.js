const carros = [
  {
    id: 1,
    marca: "Fiat",
    nome: "Palio",
    cor: "Prata",
    velocidadeMaxima: 200,
  }, 
  {
    id: 2,
    marca:"Volkswagen",
    nome:"Gol",
    cor:"Branco",
    velocidadeMaxima: 180,
  },
  {
    id: 3,
    marca:"Chevrolet",
    nome:"Cruze",
    cor:"Preto",
    velocidadeMaxima: 220,
  }
];

carros.forEach((carro) => {
  for (let atributo in carro) {
    console.log(atributo + ": " + carro[atributo]);
  }
})