const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha = Object.create(pai)
filha.nome = 'Helena'
console.log(filha.corCabelo)

const filho = Object.create(pai, {
    nome: { value: 'Heitor', writable: false, enumerable: true }
})
console.log(filho.nome)
filho.nome = 'Higor'
console.log(`${filho.nome} tem o cabelo ${filho.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (let key in filho) {
    filho.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}