class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Oliveira')
    }
}

const filho = new Filho
console.log(filho) // {sobrenome: 'Oliveira', profissao: 'Professor'}

const pai = new Pai
console.log(pai) // {sobrenome: undefined, profissao: 'Professor'}

const avo = new Avo
console.log(avo) // {sobrenome: undefined}