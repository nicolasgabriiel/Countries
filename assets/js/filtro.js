//Elemento do botão de filtros
const filtros = document.getElementById('filtro')

const filtrosOcultos = document.getElementById('filtros-ocultos')
//botões de filtros exclusivos
const africa = document.getElementById('Africa')
const america = document.getElementById('America')
const asia = document.getElementById('Asia')
const europe = document.getElementById('Europe')
const oceania = document.getElementById('Oceania')

let aberto = false;
//Lista de Filtrados
const listaGeral = document.getElementsByClassName('container-pais')
const paisesAfricanos = document.getElementsByClassName('Africa')


function abrirFiltros(){
    filtrosOcultos.style.display = "flex"
}

function fecharFiltros(){
    filtrosOcultos.style.display = "none"
}


filtros.onclick = function AbrirFiltros () {
    if(aberto == false){
        abrirFiltros()
        aberto = true
        arrow.src = "../images/arrow_"
    }
    else if(aberto == true){
        fecharFiltros()
        aberto = false 
    } 
}



arrow.onclick = function AbrirFiltros () {
    if(aberto == false){
        abrirFiltros()
        aberto = true
    }
    else if(aberto == true){
        fecharFiltros()
        aberto = false 
    } 
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
console.log(filtros)