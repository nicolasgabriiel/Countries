//Elemento do botão de filtros
const filtros = document.getElementById('filtro')

const filtrosOcultos = document.getElementById('filtros-ocultos')


let aberto = false;

let filtroAfrica = false;
//Lista de Filtrados
const listaGeral = document.getElementsByClassName('container-pais')











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

///////// mostrar paises filtrados 
//botões de filtros exclusivos
let region;

let botoes = []

let classes = []

regioes = ["Africa", "Americas","Europe", "Asia", "Oceania"]

for(let i = 0; i < regioes.length; i++){
    botoes[i] = document.getElementById(regioes[i])

    classes[i] = document.getElementsByClassName(regioes[i])



botoes[0].onclick = function filtrandoPorRegiao (){

  
    if(filtroAfrica == false){

        mostrarNada()
        mostrarPaises()
        africa.style.fontWeight = "bold"
        filtroAfrica = true;
       
        region = classes[i]
    }else if(filtroAfrica == true){

        africa.style.fontWeight = "200"
        mostrarTudo()
        filtroAfrica = false;
    }
} 


function mostrarPaises(){
    
    for (let t = 0; i < region.length; t++) {
        
      region[t].style.display = "inline-block";
    }
}}