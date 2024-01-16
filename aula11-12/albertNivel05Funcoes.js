// Albert Nivel 05
function pensar () {
  console.log("Estou Pensando...");
}

// pensar();
function entregarPacote( listaProdutos  ) {
  return listaProdutos;
}

const lista = ["Martelo", "Parafuso", "Porcas"]

// console.log( entregarPacote( lista ) )

function calcular (n1, n2, operador) {
  switch( operador ){
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
      return "OPERADOR INVÁLIDO";
  }
}

function somar(n1, n2) {
  return n1 + n2
}

function subtrair(n1, n2) {
  return n1 - n2
}

function multiplicar(n1, n2) {
  return n1 * n2
}

function dividir(n1, n2) {
  return n1 / n2
}

// console.log(somar(35, 10));
// console.log(subtrair(35, 10));
// console.log(multiplicar(35, 10));
// console.log(dividir(35, 10));
console.log(calcular(20, 30, "-"));




