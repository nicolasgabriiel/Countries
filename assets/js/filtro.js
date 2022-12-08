//Elemento do botão de filtros
const filtros = document.getElementById('filtro')

const filtrosOcultos = document.getElementById('filtros-ocultos')
//botões de filtros exclusivos
const all = document.getElementById('All')
const africa = document.getElementById('Africa')
const america = document.getElementById('America')
const asia = document.getElementById('Asia')
const europe = document.getElementById('Europe')
const oceania = document.getElementById('Oceania')

let aberto = false;

let filtroAfrica = false;
//Lista de Filtrados
const listaGeral = document.getElementsByClassName('container-pais')
const paisesAfricanos = document.getElementsByClassName('Africa')
const paisesAmericanos = document.getElementsByClassName('Americas')



function abrirFiltros(){
    filtrosOcultos.style.display = "flex"
    openArrow()
    aberto = true
}

function fecharFiltros(){
    filtrosOcultos.style.display = "none"
    closeArrow()
    aberto = false 
}

function openArrow(){
    if(themeWhite == true){
        arrow.src = "assets/images/arrow_down.png"
     }else if (themeWhite == false){
        arrow.src = "assets/images/arrow_down_dark.png"
     }
}

function closeArrow(){
    if(themeWhite == true){
        arrow.src = "assets/images/arrow_up.png"
     }else if (themeWhite == false){
        arrow.src = "assets/images/arrow_up_dark.png"
     }
}

filtros.onclick = function AbrirFiltros () {
    if(aberto == false){
        abrirFiltros()
    }
    else if(aberto == true){
        fecharFiltros()
    } 
}

function mostrarNada (){
    for (let i = 0; i < listaGeral.length; i++) {

        listaGeral[i].style.display = "none";
        }
}
function mostrarTudo(){
    for (let i = 0; i < listaGeral.length; i++) {

        listaGeral[i].style.display = "inline-block";
        }
}
function mostrarPaisesAfricanos(){
    for (let i = 0; i < paisesAfricanos.length; i++) {
        console.log(paisesAfricanos)
      paisesAfricanos[i].style.display = "inline-block";
    }
}


africa.onclick = function filtrandoAfrica (){
    console.log('etapa1')
    if(filtroAfrica == false){
        console.log('etapa2')
        mostrarNada()
        mostrarPaisesAfricanos()
        africa.style.fontWeight = "bold"
        filtroAfrica = true;
       

    }else if(filtroAfrica == true){
        console.log('etapa3')
        africa.style.fontWeight = "200"
        mostrarTudo()
        filtroAfrica = false;
    }
} 
