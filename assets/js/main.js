//chamando a função que carrega os paises na tela
loadCountries();

//função para formatar os valores da população
function formatarValor(valor) {
    return valor.toLocaleString('pt-BR');
}

//Lista que recebe os paises
const listaPaises = document.getElementById('lista-paises')

//função que carrega os paises na tela
function loadCountries (){

        let url = 'https://restcountries.com/v2/all'

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((pais) => {
                // gera uma lista html com todos os paises da API
                const lisPaises = pais.reduce((accumulator, paises) => {

                    accumulator+= 
                    `
                    <li class="container-pais ${paises.region} ${paises.name}" onclick="mostrarDados('${paises.alpha3Code}')" >
                        <div class="img" style="background-image: url(${paises.flags.png}) ;" id="${paises.alpha3Code}"></div>
                        <h2 class="name-filter ${paises.name}">${paises.name}</h2>
                        <p><strong>Population:</strong> ${formatarValor(paises.population)}</p>
                        <p><strong>Region:</strong> ${paises.region}</p>
                        <p><strong>Capital:</strong> ${paises.capital}</p>
                    </li>
                    `
                    return accumulator 
             }, '') 
             //Insere toda a lista html no próprio html            
             listaPaises.innerHTML = lisPaises
        }
    )}
    




