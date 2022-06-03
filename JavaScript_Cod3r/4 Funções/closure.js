/*  Closure é o escopo criado quando uma funçã é declarada
    Esse escopo permite a função acessar e manipular variáveis externas à função 
*/
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // valor = 'Local'