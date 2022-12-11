const input = document.querySelector('#search')
input.addEventListener('input', event => {
    const inputValue = event.target.value.trim()

    const divBtn = document.querySelectorAll('.informations');

    divBtn.forEach( element => { 
        if (!element.childNodes[0].textContent.includes(inputValue)) {
            element.parentNode.classList.add('desactive')
        } else {
            element.parentNode.classList.remove('desactive')
        }
    })
})