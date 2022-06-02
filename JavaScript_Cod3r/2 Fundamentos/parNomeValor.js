// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// objetos são aninhamentos de pares nome/valor
const Cliente = {
    bnome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)