// Função em JS é first-class object (citizens)
// Higer-oerder function

const { objectExpression, functionTypeAnnotation } = require("@babel/types")

// Criar de forma literal
function fun1(){}

// Função armazenada em uma variável
const fun2 = function () {}

// Função armazenada em um array
const array = [function (a,b){ return a+b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const onj = {}
objectExpression.falar = function () {return 'Opa'}
console.log(obj.falar())

// passar função como parametro
function run(fun){
    fun()
}
run(function () {console.log('Executando...')})

// Uma função pode retornr/conter uma função
function soma(a,b) {
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) // (4) é o valor repassado à função retornada
const cincoMais = soma(2,3)
cincoMais(4)