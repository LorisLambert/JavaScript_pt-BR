// Usando Classe
class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

// Usando Factory
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = new Pessoa('Maria')
p2.falar()

// Usando Função contrutora
function Pessoa(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p3 = new Pessoa('José')
p3.falar()