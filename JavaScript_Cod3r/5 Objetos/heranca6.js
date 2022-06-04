function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('conteúdo 1', 1)
const aula2 = new Aula('conteúdo 2', 2)
console.log(aula1, aula2)

// Simulando o new por meio de uma função
function novo(f, ...params) { // Oparador spread "..."
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'conteúdo 3', 3)
const aula4 = novo(Aula, 'conteúdo 4', 4)
console.log(aula3, aula4)