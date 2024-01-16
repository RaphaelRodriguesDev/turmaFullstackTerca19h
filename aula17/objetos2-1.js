const PC = {
  id: 1,
  SO: "Windows 11",
  processador: "Intel Core i9",
  placaMae: "Asus Gamer",
  placaDeVideo: "RTX 4060ti",
  RAM: "Corsair 64GB",

  enviarEmail() {
    return "enviar email";
  }
};
// console.log( PC.processador );
// for (const atributo in PC) {
//   console.log(atributo + ": " + PC[atributo] );
// }
console.log( PC.enviarEmail() );
