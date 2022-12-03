loadCountries();

const listaPaises = []

let id = 21




function loadCountries (){
       



    let url = 'https://restcountries.com/v2/all'





    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((pais) => {
            for(i = 0; i < id; i ++){
            console.log(pais[i].demonym) }
        })
        .catch((erro) => {
            console.log("Erro: " + erro);
        })
        
    }
