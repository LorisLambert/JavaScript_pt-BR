// O "_" é uma convenção usada para definir que a variável deve ser acessada apenas internamente
const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // _valor sendo acessada internamente