//Botão Principal que abre os filtros secundários
const filtros = document.getElementById('filtro')
//Div oculta dos botões de filtros secundários
const filtrosOcultos = document.getElementById('filtros-ocultos')
//Varival que determina se o botão principal está ativo ou não
let aberto = false;
//Variavel que determina se os elementos da tela estão sendo filtrados ou não
let filtroGeral = false;
//Lista de todos os elementos exibidos na tela
const listaGeral = document.getElementsByClassName('container-pais')

// Função que deixa visivel os Filtros ocultos
function abrirFiltros(){
    filtrosOcultos.style.display = "flex"
    openArrow()
    aberto = true
}
//Função que fecha a aba dos filtros ocultos
function fecharFiltros(){
    filtrosOcultos.style.display = "none"
    closeArrow()
    aberto = false 
}
// Função que muda a imagem de seta que fica junto ao botão de filtros principais
function openArrow(){
    if(themeWhite == true){
        arrow.src = "assets/images/arrow_down.png"
     }else if (themeWhite == false){
        arrow.src = "assets/images/arrow_down_dark.png"
     }
}
// Função que muda a imagem de seta que fica junto ao botão de filtros principais
function closeArrow(){
    if(themeWhite == true){
        arrow.src = "assets/images/arrow_up.png"
     }else if (themeWhite == false){
        arrow.src = "assets/images/arrow_up_dark.png"
     }
}
// Fução que determina se deve abrir ou fechar a div oculta
filtros.onclick = function AbrirCaixa () {
    if(aberto == false){
        abrirFiltros()
    }
    else if(aberto == true){
        fecharFiltros()
    } 
}
//Função que retira todos os elementos da tela
function mostrarNada (){
    for (let i = 0; i < listaGeral.length; i++) {
        listaGeral[i].style.display = "none";
        }
}
//Função que mostra todos os elementos na tela
function mostrarTudo(){
    for (let i = 0; i < listaGeral.length; i++) {
        listaGeral[i].style.display = "inline-block";
        }
}
// Variavel que recebe o valor de qual região deve ser filtrada
let region;
//variavel que recebe os todos os botoes de filtros
let botoes = []
//variavel que recebe todas as classes dos elementos
let classes = []
//Lista de todos os obejtos que são as classes dos elementos, e os id's dos botoes
const regioes = ["Africa", "Americas","Europe", "Asia", "Oceania"]

//Agrega o valor correto as variaveis botoes e classes
for(let i = 0; i < regioes.length; i++){
    botoes[i] = document.getElementById(regioes[i])

    classes[i] = document.getElementsByClassName(regioes[i])

//quando algum dos botoes for precionado o programa deve Filtrar por região
botoes[i].onclick = function filtrandoPorRegiao (){

    //Verifica se algum filtro está ativo
    if(filtroGeral == false){
        mostrarNada()
        removerFonte()
        botoes[i].style.fontWeight = "bold"
        filtroGeral = true;
        region = classes[i]
        mostrarPaises()
    
    //Se estiver ativo ao clicar ele remove o filtro
    }else if(filtroGeral == true){
        removerFonte()
        mostrarTudo()
        filtroGeral = false;
    }
} 
}
//Mostra os paises por regioes que são definidas ao clicar nos botões
function mostrarPaises(){
    for (let t = 0; t < region.length; t++) {
      region[t].style.display = "inline-block";
    }
}
//Remove a Font Weight Bold de todos os botoes
function removerFonte (){
    for(let i = 0 ; i < botoes.length ; i++){
        botoes[i].style.fontWeight = "200"
    }
}
