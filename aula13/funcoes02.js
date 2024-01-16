
function validarPerfil(perfil) {
  switch (perfil) {
    case "ADM":
      return verificarAdministrador();
      break;
    case "USER":
      return verificarUsuarioPadrao();
      break;
    case "TEST":
      return verificarUsuarioTeste();
      break;
    default:
      exibirErro();
  }
}

function verificarAdministrador() {
  return "Codigo para enviar ou manipular a area de administrador"
}
function verificarUsuarioPadrao() {
  return "Codigo para enviar ou manipular a area de usuario"
}
function verificarUsuarioTeste() {
  return "Codigo para enviar ou manipular a area de testes"
}

function exibirErro() {
  return "Usuário INVÁLIDO"
}

const resultado = validarPerfil("USER");
console.log(resultado);
