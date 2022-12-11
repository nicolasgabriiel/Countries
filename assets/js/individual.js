const sectionOne = document.getElementById("sectionOne")

function fecharSectionOne(){
    sectionOne.style.display = "none"
}

const back = document.getElementById('back')

console.log(back)
back.onclick = function reload (){
    
    document.location.reload(true);
}

const informacoesIndividuais = document.getElementById('informacoesIndividuais')


back.style.display = "none"


function mostrarBotao (){
    back.style.display = "block"
}




let urlData;

function mostrarDados(dado){
    fecharSectionOne()
    mostrarNada()
    mostrarBotao()
    
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
  

        let moeda ;
        let nomeNativo;
        let linguagem;

        for (const currency in dados[0].currencies) {
            moeda = dados[0].currencies[currency].name
        }
        for (const language in dados[0].languages) {
            linguagem = dados[0].languages[language]
        }
        for (const name in dados[0].name.nativeName) {
            nomeNativo = dados[0].name.nativeName[name].official
        }
        console.log(moeda);
       let dadosDaApi  = `
       
       <div class="imagem-individual" style="background-image: url(${dados[0].flags.png});"></div>
       <div class="informacoes">
       <h2>${dados[0].name.official}</h2>
       <p><strong>Native Name: </strong>${nomeNativo}</p>
       <p><strong>Top Level Domain: </strong>${dados[0].tld[0]}</p>
       <p><strong>Population: </strong>${dados[0].population}</p>
       <p><strong>Currencies: </strong>${moeda}</p>
       <p><strong>Region:</strong>${dados[0].region}</p>
       <p><strong>Languages: </strong>${linguagem}</p>
       <p><strong>Sub Region: </strong>${dados[0].subregion}</p>
       <p><strong>Capital: </strong>${dados[0].capital}</p>
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

