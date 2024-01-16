// import somar from "./operacoes/soma.js";
// import subtrair from "./operacoes/subtracao.js";
// import multiplicar from "./operacoes/multiplicacao.js";
// import dividir from "./operacoes/divisao.js";

import { somar, subtrair, multiplicar, dividir } from "./operacoes.js";

export default function calcular() {
  let n1 = Number(prompt("Primeiro valor: "));
  let n2 = Number(prompt("Segundo valor: "));
  let op = prompt("Operador: (+, -, *, /)");

  switch (op) {
    case "+":
      return somar(n1, n2);
      break;
    case "-":
      return subtrair(n1, n2);
      break;
    case "*":
      return multiplicar(n1, n2);
      break;
    case "/":
      return dividir(n1, n2);
      break;
    default:
      return "OPCAO INVALIDA";
  }
}
