
# Frontend Mentor - Rest Countries API

Esta é uma solução para o desafio [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) do site [Front End Mentor](https://www.frontendmentor.io/challenges), onde você escontra diversos desafios que vão te ajudar a melhorar o seu conhecimento no Front-End.

## Sumário

- [Resumo](#Resumo)
  - [Desafio](#Desafio)
  - [Screenshot](#screenshot)
  - [Link](#link)
- [Processo](#Processo)
  - [Construido com](#construido-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
- [Autor](#autor)

## Resumo

O desafio é construir o projeto e deixá-lo o mais próximo possível do design. Podendo usar qualquer ferramenta para ajudar a concluir o desafio. Nesse desafio é necessário fazer o uso de uma API externa chamada Rest Countrie API

### CoutrieAPI: https://restcountries.com

### Desafio

O objetivo desse site é que o usuário possa acessar informações de diversos países, tendo em vista o design mais fiel possível ao layout original e algumas funcionalidades como:

-Botão para trocar o tema de tela
-Botão para filtragem
-Barra de pesquisa
-Design Responsivo

### Screenshot

<p align="center">
    <img width="768px" src="assets/readme/imagem-1.png"></img>
</p>

------
<p align="center">
    <img width="768px" src="assets/readme/imagem-2.png"></img>
</p>

------
<p align="center">
    <img width="768px" src="assets/readme/imagem-3.png"></img>
</p>

------
<p align="center">
    <img width="768px" src="assets/readme/imagem-4.png"></img>
</p>

------
<p align="center">
    <img width="375px" src="assets/readme/imagem-5.png"></img>
</p>

------

<p align="center">
    <img width="375px" src="assets/readme/imagem-6.png"></img>
</p>

------

<p align="center">
    <img width="1024px" src="assets/readme/countries.png"></img>
</p>

### Link: https://nicolasgabriiel.github.io/Countries/

## Processo

### Construido com

-HTML5
-CSS3
-JavaScript
[-Rest Countrie API:](https://restcountries.com)

### Principais coisas que aprendi

Mais funcionalidades do display Flex, como:

```css
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
```



Utilizar o JS para barra de pesquisa:

```js
   filtroName.forEach( elemento => { 
        if (!elemento.textContent.includes(inputValido)) {
            elemento.parentNode.classList.add('desativado')
        } else {
            elemento.parentNode.classList.remove('desativado')
        }
    })
```

## Autor

-  Site pessoal - [Nicolas Gabriel](https://www.linkedin.com/in/nicolasgabriiel/)

  

