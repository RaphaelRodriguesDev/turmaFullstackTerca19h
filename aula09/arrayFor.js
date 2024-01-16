const notas = [ 7.56666666, 5.0242342, 9.0234234234, 8.3794283579 ];

// for (let i = 0; i < notas.length; i++) {
//   console.log( notas[i].toFixed(4) );
// }

// for (let item of notas) {
//   console.log(item.toFixed(2));
// }

// let array = {
//   0: 7.56666666,
//   1: 5.0242342,
//   2: 9.0234234234,
//   3: 8.3794283579,
// }

for (let item in notas) {
  console.log(item);
}
