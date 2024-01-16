// METODOS DE ARRAY
const nomes = ["JOSÉ", "ALFREDO", "CARLOS", "ANA", "PAULA"]

const sobrenomes = ["Rodrigues", "Souza", "Azevedo", "Silva", "Mendes"]

// METODO CONCAT
const uniao = nomes.concat(sobrenomes);
// console.log(uniao);

//METODO JOIN
const juncao = nomes.join();

// console.log(juncao);

// METODO SPLICE
// nomes.splice(1,2, "teste");
// nomes.splice(1,1);
// console.log(nomes);

//INDEX OF
const buscar = "josé";
const verificador = nomes.indexOf( buscar.toUpperCase() );
console.log(verificador);


