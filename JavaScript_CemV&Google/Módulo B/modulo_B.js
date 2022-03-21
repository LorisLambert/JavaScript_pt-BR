/* 
    No geral, o melhor local para ser inserida uma tag <script> é antes do fechamento da tag <body>.
    Isso se dá devido ao fato de que o browser, ao encontrar uma tag <script>, precisa executar o que
    foi específicado ou dentro da tag ou pelo atributo 'src', bloqueando assim a renderização do 
    restante da página.
*/

/* 
    (number + number) -> aperação de adição
    (string + string) -> operação de concatenação
    (string + number) -> operação de concatenação
    (number + string) -> operação de concatenação
*/

// Caixa de preenchimento para recebe uma string
var info = window.prompt("Digite uma informação:")
// Concatenação de strings, pois info é uma string
window.alert("Você nos informou:" + info)
// Recebe string e converte em number
var n1 = Number(window.prompt("Digite um número:"))
var n2 = Number(window.prompt("Digite um outro número:"))
// Faz a soma em number
var soma = n1 + n2
// Usando concatenação simples
window.alert("A soma dos números é:" + soma) 
// Usando template strings
window.alert(`A soma entre ${n1} e ${n2} é ${soma}`) 


/*
    (string) -> (number) : Number(), Number.parseFloat(), Number.parseInt()
    (number) -> (string) : String(), 
*/

// Caixa de preenchimento para recebe uma string
var nome = window.prompt("Qual é o seu nome?")
// Atributo não se usa parenteses
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras. <br/>`)
// Método se usa parenteses
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br/>`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}<br/>`)