// Usando a notação literal (que é deferente de json)
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = this.nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Lapiseira', 6.99, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionari(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase, 
        faltas,
        getsalario() {
            return (salarioBase / 30) *  (30 -  faltas)
        }
    }
}
const f1 = criarFuncionari('João', 7980, 4)
const f2 = criarFuncionari('Maria', 7980, 1)
console.log(f1.getsalario(), f2.getsalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função usando JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)