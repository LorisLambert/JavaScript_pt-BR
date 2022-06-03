function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4000,
    desconto: 0.15,
    getPreco
}

console.log(getPreco()) // R$ NaN

global.preco = 1000
global.desconto = 0.1
console.log(getPreco()) // R$ 900

console.log(produto.getPreco()) // R$ 3400

console.log(getPreco.call(produto, 0.17, '$')) // $ 3320
console.log(getPreco.apply(produto, [0.2, '$'])) // $ 3200