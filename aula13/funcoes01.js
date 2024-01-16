
function verificarIdade(idade) {
  if (idade < 16) {
    console.log("Não pode votar nem dirigir");
  } else if (idade >= 16 && idade < 18) {
    console.log("Pode votar, mas não pode dirigir");
  } else {
    console.log("Pode votar e dirigir");
  }
}
verificarIdade(12);
