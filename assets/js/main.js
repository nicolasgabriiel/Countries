loadCountries();

function loadCountries (){
   

    let url = 'https://restcountries.com/v3.1/name/peru'

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((pais) => {

            console.log(pais[0].name.common) 
        })
        .catch((erro) => {
            console.log("Erro: " + erro);
        })
        
    }