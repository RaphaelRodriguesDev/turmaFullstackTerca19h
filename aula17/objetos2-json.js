const carros = [
  {
    id: 1,
    nome: 'Gol',
    marca: 'VW',
    ano: 2010,
    preco: 200000,
    itensNoPortaMalas: ["pendriven", "cartão", "chaves"]
  },
  {
    id: 2,
    nome: 'Golf',
    marca: 'VW',
    ano: 2010,
    preco: 300000,
    itensNoPortaMalas: ["pendriven", "cartão", "chaves"]
  }
]

const json = JSON.stringify(carros);

console.log(json);
