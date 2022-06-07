const numeros = [1, 2, 3, 4, 5]

// For com propósito
let resultado = numeros.map(function(e) {
    return e * 2
})
console.log(resultado)

const dobro = e => e * 2
const reais = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = numeros.map(dobro).map(reais)
console.log(resultado)