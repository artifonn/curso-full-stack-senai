function voltarAoTopo() {
  let telaInicial= window.scrollTo(
    {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  )
  return telaInicial;
}

function login() {
  let logado = 1;
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value;
  if(usuario == 'admin' && senha == 'abc123') {
    window.location = 'index.html';
    logado;
  } else {
    alert('Acesso Negado!');
  }
}
