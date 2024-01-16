//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
// let estado = "MA";
// let result = "";

// switch (estado) {
//   case "RJ":
//   case "SP":
//   case "MG":
//   case "ES":
//     result = "REGIÃO SUDESTE";
//     break;

//   case "AM":
//   case "RR":
//   case "RO":
//   case "AC":
//   case "PA":
//     result = "REGIÃO NORTE";
//     break;

//   default:
//     result = "OUTRA REGIÃO";
// }

let peso = 65;
let altura = 1.71;
let imc = peso / (altura * altura);
let result = "";

if (imc < 18.5) {
  result = "ABAIXO DO PESO";
  
} else if(imc > 18.5 && imc <= 24.9) {
  result = "PESO NORMAL";
  
} else if () {
  result = "SOBREPESO";
  
} else if () {
  result = "OBESIDADE 1";

} else if () {
  result = "OBESIDADE 2";
  
} else {
  result = "OBESIDADE 3 OU MORBIDA";

}

//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

// ESTA VARIÁVEL A BAIXO EXIBE QUALQUER COISA QUE VOCÊ COLOQUE NELA
// NÃO MUDE JAMAIS O NOME DA VARIAVEL RESPOSTA
// MUDE SOMENTE O QUE TEM DEPOIS DO SINAL " = "
const resposta = result;
