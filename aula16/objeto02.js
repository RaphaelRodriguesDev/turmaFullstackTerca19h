
const pessoa01 = {
  id: 1,
  nome: "Raphael",
  segundoNome: "Rodrigues",
  idade: 32,
  profissao: "Programador",
  telefone: "(21) 99999-9999",
}

for (const atributo in pessoa01) {
  console.log(atributo + ": " + pessoa01[atributo]);
}