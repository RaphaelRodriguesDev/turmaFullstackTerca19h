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

let p = 60;
let h = 1.7;

const calcularIMC = (p, h) => p / (h * h);
const IMC = calcularIMC(p, h);

// crie a função chamada verificar peso
const verificarPeso = imc => {
  
};

verificarPeso(IMC);
