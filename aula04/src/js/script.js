document.addEventListener("DOMContentLoaded", () => {
  //---- SEU CÓDIGO ABAIXO ----//
  let n1 = 2;
  let n2 = 2;
  let n3 = 4;
  let n4 = 5;

  let verificador = n1 === n2 && n3 > n4;
  // let verificador = !(n1 !== n2 || n3 > n4);
  // let verificador = n1++;
  let resposta;

  // if (!verificador) {
  //   resposta = "Entrei no verdadeiro";
  // } else {
  //   resposta = "Entrei no falso";
  // }
  
  let nota1 = 2;
  let nota2 = 2;
  let nota3 = 2;
  let nota4 = 2;
  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  // if (media >= 7) { // SE
  //   resposta = "APROVADO";
    
  // } else if (media >= 5 && media < 7) {
  //     resposta = "EM RECUPERAÇÃO";
  // } else {
  //   resposta = "REPROVADO";
  // }

  if (media >= 7) { // SE
    resposta = "APROVADO";
    
  } else if (media < 5) {
    resposta = "REPROVADO";
  } else {
    resposta = "EM RECUPERAÇÃO";
  }


  //---- EXIBIR RESULTADO NA TELA ----//
  exibirResultadoNaTela(resposta);
});
