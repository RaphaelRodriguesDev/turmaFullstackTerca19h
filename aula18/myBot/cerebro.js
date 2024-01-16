import calcular from "./calculadora.js";
import realizarSaudacao from "./saudacao.js"

const myBot = {
  // Caracteristicas do Robo
  id: 1,
  name: "Albert",
  type: "Geral",
  version: "1.0.0",
  description: "",
  author: "Raphael Rodrigues",
  createdDate: "",
  updatedDate: "",

  // Metodos do Robo
  iniciarFuncoes: () => {
    let pergunta = Number(
      prompt("O que deseja fazer? (1 - saudar, 2 - calculadora)")
    );

    switch (pergunta) {
      case 1:
        alert(myBot.realizarSaudacao());
        break;

      case 2:
        alert(myBot.calcular());
        break;

      default:
        alert("OPÇÃO INVÁLIDA");
    }
  },

  realizarSaudacao: () => {
    return realizarSaudacao();
  },

  // Calculadora
  calcular: () => {
    return calcular();
  }
  
};

myBot.iniciarFuncoes();
