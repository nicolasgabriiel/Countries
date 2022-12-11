let sectionOne = document.getElementById("sectionOne")

function fecharSectionOne(){
    sectionOne.style.display = "none"
}

const informacoesIndividuais = document.getElementById('informacoesIndividuais')

console.log(informacoesIndividuais)




let urlData;

function mostrarDados(dado){
    fecharSectionOne()
    mostrarNada()
    
    dado = dado.toLowerCase()
    urlData = "https://restcountries.com/v3.1/alpha?codes=" +dado

    console.log(urlData)
    puxarApi()

}

function puxarApi(){
    fetch(urlData)
    .then((response) => {
        return response.json();
    })
    .then((dados) => {
        console.log(dados[0].name.nativeName);

       let dadosDaApi  = `
       <div class:"button-back" id="back"><button>Back</button></div>
       <div class="imagem-individual" style="background-image: url(${dados[0].flags.png});"></div>
       <div class="informacoes">
       <h2>${dados[0].name}</h2>
       <p><strong>Native Name:</strong>${dados[0].name.nativeName}</p>
       <p><strong>Top Level Domain:</strong>${dados[0].tld[0]}</p>
       <p><strong>Population:</strong>${dados[0].population}</p>
       <p><strong>Currencies:</strong>${dados[0].currencies.name}</p>
       <p><strong>Region:</strong>${dados[0].region}</p>
       <p><strong>Languages:</strong>${dados[0].languages}</p>
       <p><strong>Sub Region:</strong>${dados[0].subregion}</p>
       <p><strong>Capital:</strong>${dados[0].capital}</p>
       </div>
       <div class="border-countries">
       <h3>Border Countries</h3>
       <p>${dados[0]}</p>
       <p>${dados[0]}</p>
       <p>${dados[0]}</p>
       </div>
        
        
        
        `

        informacoesIndividuais.innerHTML = dadosDaApi
    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    })

    
}