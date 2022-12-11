const inputSearch = document.getElementById('search')

let inputValido ;

inputSearch.addEventListener('input', event => {
    let inputValue = event.target.value.trim()

    const filtroName = document.querySelectorAll('.name-filter');

    if(inputValue.length == 0 ){
        inputValido = ""
    }
    if(inputValue.length > 0){
     inputValido = inputValue[0].toUpperCase() + inputValue.substring(1)
    }
    

    filtroName.forEach( elemento => { 
        if (!elemento.textContent.includes(inputValido)) {
            elemento.parentNode.classList.add('desativado')
        } else {
            elemento.parentNode.classList.remove('desativado')
        }
    })
})