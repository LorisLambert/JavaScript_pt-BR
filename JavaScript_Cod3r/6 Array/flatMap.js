const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Guilherme',
        nota: 9.3
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Gabriel',
        nota: 8.1
    }, {
        nome: 'Gean',
        nota: 9.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.aluno.map(getNotaAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// Usando flatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const nota2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)