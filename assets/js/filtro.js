//Elemento do botão de filtros
const filtros = document.getElementById('filtro')

const filtrosOcultos = document.getElementById('filtros-ocultos')
//botões de filtros exclusivos
const africa = document.getElementById('Africa')
const america = document.getElementById('America')
const asia = document.getElementById('Asia')
const europe = document.getElementById('Europe')
const oceania = document.getElementById('Oceania')

//Lista de Filtrados
const listaGeral = document.getElementsByClassName('container-pais')
const paisesAfricanos = document.getElementsByClassName('Africa')

function fecharFiltros(){
    filtrosOcultos.style.display = "none"
}


filtros.onclick = function AbrirFiltros () {
    filtrosOcultos.style.display = "flex"
}
arrow.onclick = function AbrirFiltros () {
    filtrosOcultos.style.display = "flex"
}

africa.onclick = function filtroAfrica (){
 for (let i = 0; i < listaGeral.length; i++) {

      listaGeral[i].style.display = "none";
      }
    
for (let i = 0; i < paisesAfricanos.length; i++) {
    console.log(paisesAfricanos)
  paisesAfricanos[i].style.display = "inline-block";
}
fecharFiltros();
}