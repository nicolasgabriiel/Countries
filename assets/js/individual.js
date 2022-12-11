let sectionOne = document.getElementById("sectionOne")

function fecharSectionOne(){
    sectionOne.style.display = "none"
}








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
        console.log(dados[0]);


    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    })
}