// O array permite o uso de dados heterogêneo
console.log(typeof Array, typeof new Array, typeof [])

let aprovadas = new Array('Ana', 'Bia', 'Carla')
console.log(aprovadas)

aprovadas = ['Ana', 'Bia', 'Carla']
console.log(aprovadas[0])
console.log(aprovadas[1])
console.log(aprovadas[2])
console.log(aprovadas[3]) // undefined

aprovadas[3] = 'Daniela'
aprovadas.push = 'Elaine'
console.log(aprovadas.length)

aprovadas[10] = 'Lohane'
console.log(aprovadas.length)
console.log(aprovadas[9] === undefined)
console.log(aprovadas[9] === null)

console.log(aprovadas)
aprovadas.sort()
console.log(aprovadas)

delete aprovadas[2]
console.log(aprovadas[2])

let aprovados = new Array ('André', 'Bruno', 'Carlos')
aprovados.splice(1, 2, 'e1', 'e2')
console.log(typeof aprovados)