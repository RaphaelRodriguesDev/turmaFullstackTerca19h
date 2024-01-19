// Conclua este codigo criando uma função que calcule o IMC de uma pessoa e exiba o resultado no console.
// Exemplo: console.log("Seu IMC está: ABAIXO DO PESO" + imc);
// Formula do IMC: Peso / (Altura * Altura)
// tabela IMC:
/*

IMC	Resultado
  ______________________________________
  |Menos do que 18,5 -	Abaixo do peso  |
  |Entre 18,5 e 24,9 -	Peso normal     |
  |Entre 25 e 29,9 -	Sobrepeso         |
  |Entre 30 e 34,9 -	Obesidade grau 1  |
  |Entre 35 e 39,9 -	Obesidade grau 2  |
  |Mais do que 40 - Obesidade grau 3    |
  --------------------------------------
*/

let p = 53;
let h = 1.69;

const calcularIMC = (p, h) => p / (h * h);
const IMC = calcularIMC(p, h);

// crie a função chamada verificar peso
const verificarPeso = imc => {
  if (imc < 18.5) {
    console.log("Seu IMC está: ABAIXO DO PESO");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC está: PESO NORMAL");
  } else if (imc >= 25 && imc <= 29.9) {
    console.log("Seu IMC está: SOBREPESO");
  } else if (imc >= 30 && imc <= 34.9) {
    console.log("Seu IMC está: OBESIDADE GRAU 1");
  } else if (imc >= 35 && imc <= 39.9) {
    console.log("Seu IMC está: OBESIDADE GRAU 2");
  } else {
    console.log("Seu IMC está: OBESIDADE GRAU 3");
  }
};

verificarPeso(IMC);