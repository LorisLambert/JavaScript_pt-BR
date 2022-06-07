const aprovados = ['Ágata', 'Bianca', 'Camila', 'Denise']

aprovados.forEach(function(nome, indice, /* array */) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)