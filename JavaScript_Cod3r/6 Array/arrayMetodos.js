const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Add um útimo elemento no array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.push('Hammilton') // Add um primeiro elemento no array
console.log(pilotos)

/*  Splice pode add ou remover elementos  */

pilotos.splice(2, 0, 'Bottas', 'Massa') // Add
console.log(pilotos)

pilotos.splice(3, 1) // Remover
console.log(pilotos)

/*  Slice gera um novo array a partir da posição informada  */

const ultimoPiloto = pilotos.splice(4)
console.log(ultimoPiloto)

const primeiroPiloto = pilotos.splice(0,1)
console.log(primeiroPiloto)