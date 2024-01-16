// 1 - Criar um objeto produto contendo nele => id, nome e preco

// 2 - Adicionar com notação de ponto um método chamado calcular preco. Exemplo: 
// pessoa.andar = () => "estou andando";


const produto = {
  id: 1,
  nome: "Martelo",
  preco: 20.80,
}

produto.calcularPreco = () => {
  let total = 0;
  return total += produto.preco;
}

console.log(produto.calcularPreco());

