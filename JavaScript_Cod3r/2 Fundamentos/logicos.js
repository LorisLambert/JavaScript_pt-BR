function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compar(true, true))
console.log(compar(true, false))
console.log(compar(false, true))
console.log(compar(false, false))