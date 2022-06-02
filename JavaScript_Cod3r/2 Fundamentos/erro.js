function tretarErroLancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    throw{
        nome: erro.name,
        msg: erro.message,
        dte: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome:'Roberto'}
imprimirNomeGritando(obj)