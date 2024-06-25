const botao = document.querySelector(".btn");

function verificarIdade() {
  const anoAtual = new Date().getFullYear();
  const anoNascimento = document.querySelector("#txtano").value;
  const resultado = document.querySelector("div#resultado");

  if (anoNascimento.length == 0 || anoNascimento > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    const formSexo = document.getElementsByName("radsex");
    const idade = anoAtual - Number(anoNascimento);
    let faixaEtaria = "";
    const img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formSexo[0].checked) {
      if (idade >= 0 && idade <= 4) {
        faixaEtaria = "Uma Bebê";
        img.setAttribute("src", "img/bebe-f.jpg");
      } else if (idade >= 5 && idade <= 11) {
        faixaEtaria = "Uma Menina";
        img.setAttribute("src", "img/crianca-f.jpeg");
      } else if (idade >= 12 && idade <= 17) {
        faixaEtaria = "Uma Adolescente";
        img.setAttribute("src", "./assets/adolescente-f.jpeg");
      } else if (idade >= 18 && idade <= 59) {
        faixaEtaria = "Uma Adulta";
        img.setAttribute("src", "./assets/adulto-f.jpeg");
      } else {
        faixaEtaria = "Uma Idosa";
        img.setAttribute("src", "./assets/idosa-f.jpeg");
      }

    }

    resultado.innerHTML = `Detectamos ${faixaEtaria} com ${idade} anos.`
    resultado.appendChild(img);

  }
}

botao.addEventListener("click", verificarIdade);