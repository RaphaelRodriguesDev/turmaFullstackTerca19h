function exibirResultadoNaTela(result) {
  const output = document.querySelector("#output");
  output.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", exibirResultadoNaTela(resposta));
