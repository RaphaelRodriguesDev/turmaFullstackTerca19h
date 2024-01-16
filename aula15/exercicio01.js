// Site de loja virtual
// Array de quantidade de itens de Usuários
// filtre todos os itens que possuem quantidade maior ou igual a 30
// Todos os usuarios selecionados receberão mais 1 item como premio

const qtdItens = [10, 20, 30, 40, 50, 40, 2, 30, 12];
const qtdFiltrada = qtdItens
  .filter((el) => el >= 30)
  .map((el) => el + 1)
  .forEach((el) => console.log(el));


