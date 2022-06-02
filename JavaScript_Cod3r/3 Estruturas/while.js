function getInteiroAleatorioEntre(min, max){
    const valor = math.random()*(max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')