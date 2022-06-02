// novo recurso do EC2015

const pessoa={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada=true} = pessoaconsole.log(sobrenome, bemHumorada)
console.log (sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoaconsole.log(ag, num)