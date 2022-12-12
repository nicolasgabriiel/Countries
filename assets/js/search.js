//Recebe o elemento de pesquisa
const inputSearch = document.getElementById('search')

let inputValido ;

//pega o valor do input e filtra
inputSearch.addEventListener('input', event => {
    let inputValue = event.target.value.trim()

    const filtroName = document.querySelectorAll('.name-filter');

    //esse if serve pra não ter erros de pesquisa quando o value fica vazio 
    if(inputValue.length == 0 ){
        inputValido = ""
    }
    if(inputValue.length > 0){
        inputValue = inputValue.toLowerCase()
     inputValido = inputValue[0].toUpperCase() + inputValue.substring(1)
    }
    //filtra os elementos que aparecem na tela
    filtroName.forEach( elemento => { 
        if (!elemento.textContent.includes(inputValido)) {
            elemento.parentNode.classList.add('desativado')
        } else {
            elemento.parentNode.classList.remove('desativado')
        }
    })
})