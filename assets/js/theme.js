//Receber o elemento botão
let buttonDarkMode = document.getElementById('button-dark-mode')

//Receber o elemento do link do css
const link = document.getElementById('dark-mode')

//Variavel que define qual link jogar no css
let themeWhite = true;

//Recebendo elementos que vão mudar a cor na tela
const lupa = document.getElementById('lupa')
const arrow = document.getElementById('arrow')
const moon = document.getElementById('moon')

//Função que muda o tema
buttonDarkMode.onclick = function (){
if(themeWhite == true){
    themeWhite = false
    link.href = "assets/css/themetwo.css"
    lupa.src = "assets/images/lupa_dark.jpg"
    arrow.src = "assets/images/arrow_up_dark.png"
    moon.src = "assets/images/moon_dark.svg"
    
}
else if(themeWhite == false ){
    themeWhite = true
    link.href = "assets/css/themeone.css"
    lupa.src = "assets/images/lupa.jpg"
    arrow.src = "assets/images/arrow_up.png"
    moon.src = "assets/images/moon.svg"
}
}


