// Calculando a quantidade de paragráfos do poema
let numParagrafos = window.document.getElementsByTagName("p").length

// Lendo de cima para baixo os paragrafos do poema
for (let i = numParagrafos; i>=0; i--) {
    let paragrafo = window.document.getElementsByTagName("p")[i]
    // window.document.write(paragrafo.innerHTML + '<br>')
}

// Alteração de estilo
let titulo = window.document.getElementsByTagName("h1")[0]
titulo.style.color= '#993399'

// Selecionando elemento pelo Id
let importante = window.document.getElementById("aviso")
importante.style.fontWeight= "bold"

// Usando queryselector
let frase = window.document.querySelector('p#eu')
frase.style.color= '#993399'
frase.style.fontWeight= "bold"