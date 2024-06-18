// const output = document.getElementById("output");

// output.innerHTML = "<p> Olá Turma</p>"

// output.innerText = "Olá Turma"

// output.textContent = " Olá Turma, tudo bem?";

// output.style.color = "#FF0000";
// output.style.backgroundColor = "#000000"

const quadrado = document.getElementById("quadrado");
const btn = document.getElementById("btn");

quadrado.style.backgroundColor = "#000000"
quadrado.style.width = "150px";
quadrado.style.height = "150px";

function trocarCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  quadrado.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener("click", trocarCor);





