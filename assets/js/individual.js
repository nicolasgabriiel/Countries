const sectionOne = document.getElementById("sectionOne")
//Fecha a parte da seção um 
function fecharSectionOne(){
    sectionOne.classList.add('desativado')
}
const back = document.getElementById('back')
back.style.display = "none"
// O botão de voltar recarrega a página 
console.log(back)
back.onclick = function reload (){
    location.reload();
}
//elemento que vai receber os dados
const informacoesIndividuais = document.getElementById('informacoesIndividuais')
// mostra o botão de voltar
function mostrarBotao (){
    back.style.display = "block"
}
//url nova de requisição
let urlData;

//função que pega os dados do container que for clicado e gera uma nova url
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
        //Elementos que apereceram na tela
       let dadosDaApi  = `
       
       <div class="imagem-individual" style="background-image: url(${dados[0].flags.png});"></div>
       <div class="informacoes">
       <h2>${dados[0].name.official}</h2>
       <div class="informacoes-esquerda">
       <p><strong>Native Name: </strong>${nomeNativo}</p>
       <p><strong>Population: </strong>${formatarValor(dados[0].population)}</p>
       <p><strong>Region: </strong>${dados[0].region}</p>
       <p><strong>Sub Region: </strong>${dados[0].subregion}</p>
       <p><strong>Capital: </strong>${dados[0].capital}</p>
       </div>
        <div class="informacoes-direita">
       <p><strong>Top Level Domain: </strong>${dados[0].tld[0]}</p>
       <p><strong>Currencies: </strong>${moeda}</p>
       <p><strong>Languages: </strong>${linguagem}</p>
       </div>
       </div>
        `
        
        informacoesIndividuais.innerHTML = dadosDaApi
        informacoesIndividuais.style.display = "flex"
    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    })
   
}

