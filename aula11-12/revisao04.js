// ALBERT NIVEL 04

const movimentos = ["Direita", "Esquerda", "Cima", "Baixo"];

const comando = "w";

if (comando === "w") {
  console.log(movimentos[2]);
} else if (comando === "s") {
  console.log(movimentos[3]);
} else if (comando === "a") {
  console.log(movimentos[1]);
} else if (comando === "d") {
  console.log(movimentos[0]);
}
