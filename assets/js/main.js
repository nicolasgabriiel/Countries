loadCountries();

let listaCode = []

const listaPaises = document.getElementById('lista-paises')


function loadCountries (){

    
        let url = 'https://restcountries.com/v2/all'

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((pais) => {
           

                const lisPaises = pais.reduce((accumulator, paises) => {
                    
                    accumulator+= `
                    
                    <li class="container-pais ${paises.region}  " onclick="insert(${paises.alpha3Code})">
                        <div class="img" style="background-image: url(${paises.flag}) ;"></div>
                        <h2>${paises.name}</h2>
                        <p><strong>Population:</strong> ${paises.population}</p>
                        <p><strong>Region:</strong> ${paises.region}</p>
                        <p><strong>Capital:</strong> ${paises.capital}</p>
                    </li>
                    
                    `
                   listaCode = paises.alpha3Code
                   
                    return accumulator
             }, '')             
         


            
        listaPaises.innerHTML = lisPaises

        }
        )}
    
        
    