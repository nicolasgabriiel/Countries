//Elemento do botão de filtros
const filtros = document.getElementById('filtro')

const filtrosOcultos = document.getElementById('filtros-ocultos')


let aberto = false;

let filtroGeral = false;
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

console.log(botoes[i])

botoes[i].onclick = function filtrandoPorRegiao (){

  
    if(filtroGeral == false){

        mostrarNada()
        removerFonte()
        botoes[i].style.fontWeight = "bold"
        filtroGeral = true;
       
        region = classes[i]
        mostrarPaises()
    }else if(filtroGeral == true){

        removerFonte()
        mostrarTudo()
        filtroGeral = false;
    }
} 
}

function mostrarPaises(){
    
    for (let t = 0; t < region.length; t++) {
        
      region[t].style.display = "inline-block";
    }
}
function removerFonte (){
    for(let i = 0 ; i < botoes.length ; i++)
    botoes[i].style.fontWeight = "200"
}