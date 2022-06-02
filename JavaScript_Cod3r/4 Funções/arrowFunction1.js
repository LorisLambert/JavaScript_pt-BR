let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a // return implícito
console.log(dobro(Math.PI))

let ola = function (){
    return 'olá'
}

// Função sem parametro
ola = () => 'Olá'

// Função com parametro não obrigatório
ola = _ => 'Olá'
console.log(ola())