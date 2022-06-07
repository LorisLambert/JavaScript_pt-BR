Array.prototype.reduce2 = function(callback, /* Valor inicial */) {
    /* const indiceInicial = valor iniciandl ? 0 : 1 */
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const numeros = [1, 2, 3, 4, 5, 6]
console.log(numero.reduce2(soma, /* Valor inicial */))