// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 'A' // Evite usar!
const avo = { atributo1: 'B'}
const pai = { atributo2: 'C', __proto__: avo}
const filho = { atributo3: 'D', __proto__: pai}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)
console.log(pai.atributo0, pai.atributo1, pai.atributo2, pai.atributo3)
console.log(avo.atributo0, avo.atributo1, avo.atributo2, avo.atributo3)

// Cadeia de protótipos com sobrescrita de métodos
const carro = {
    velcoidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velcoidadeAtual + delta <= this.velocidadeMaxima) {
            this.velcoidadeAtual += delta
        } else {
            this.velcoidadeAtual = this.velocidadeMaxima
        }
    },
    status() {
        return `${this.velcoidadeAtual}Km/h de ${this.velocidadeMaxima}`
    }
}
const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 320 // shadowing
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())