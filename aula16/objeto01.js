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

// const chevrolet = {
//   id: 3,
//   marca:"Chevrolet",
//   nome:"Cruze",
//   cor:"Preto",
//   acelerar() {
//     return "acelerando";
//   }
// }

// carros.forEach( carro => console.log(carro.nome) );

const carrosVelozes = carros
  .filter( carro => carro.velocidadeMaxima >= 200)
  .forEach( carro => console.log(carro.nome) );


