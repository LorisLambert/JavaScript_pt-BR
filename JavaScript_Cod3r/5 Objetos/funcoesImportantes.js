const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach( e => { console.log(`${e[0]}: ${e[1]}`) })
Object.entries(pessoa).forEach( ([chave, valor]) => { console.log(`${chave[0]}: ${valor[1]}`) })
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2001'
})
pessoa.dataNascimento = '02/02/2002'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = { a: 1}
const obj1 = { b: 2}
const obj2 = { c: 3, a: 4}
const obj = Object.assign(destino, obj1, obj2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)