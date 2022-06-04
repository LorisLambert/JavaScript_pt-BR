// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Nome', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descrição = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Isa', idade: 26 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Guimarães'
pessoa.idade = 27
delete pessoa.nome
console.log(pessoa)

// Object.freeze = Object.seal + writable: false