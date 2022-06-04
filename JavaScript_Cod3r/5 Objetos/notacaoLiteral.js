const a = 1
const b = 2
const c = 3
const obj1 = { a: a, b: b, c: c} // Notação antiga 
const obj2 = { a, b, c } // Notação nova
console.log(obj1, obj2)

const tipo = 'Idade'
const valor = 29
const obj3 = {}  // Notação antiga 
obj3[tipo] = valor
const obj4 = {[tipo]: valor}
console.log(obj3, obj4) // Notação nova

const obj5 = {
    funcao1: function() {
        // Notação antiga
    },
    funcao2() {
        // Notação nova
    },
}
console.log(obj5)