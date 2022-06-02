// Arguments is an type of array with all parameters repassados a função
function soma(){
    let soma = 0
    for (let i in arguments){
        soma+= arguments[i]
    }
    return soma
}

// passando nenum valor
console.log(soma())

// passando um único parametro
console.log(soma(1))

// passando mais de um parametros numéricos
console.log(soma(1.1,2.2,3.3))

// passando paraemtros de tipos diferentes (concatenação)
console.log(soma(1.1,2.2,3.3,'Teste'))

// passando mais de um parametros char (concatenação)
console.log(soma('a','b','c'))