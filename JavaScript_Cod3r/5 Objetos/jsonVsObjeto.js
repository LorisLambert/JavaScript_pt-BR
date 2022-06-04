/*  JSON é um formato de dados, que pemite a interoperabilidade entre os sistemas,
    mas não comporta função
*/
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a:1, b:2, c:3}"))
// console.log(JSON.parse("{'a':1,'b':2,'c':3}"))
// console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":1.9,"b":"string","c":true,"d":{},"e":[]}'))