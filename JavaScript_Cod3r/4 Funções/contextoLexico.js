const valor = 'Global'

// Situação 1
function minhaFuncao1() {
    console.log(valor)
}

function minhaFuncao2() {
    const valor = 'Local'
    minhaFuncao1()
}

minhaFuncao2() // valor = 'Global'

// Situação 2
function minhaFuncao3() {
    const valor = 'Local'
    console.log(valor)
}

function minhaFuncao4() {
    minhaFuncao3()
}

minhaFuncao4() // valor = 'Local'