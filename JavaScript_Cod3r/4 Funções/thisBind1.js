const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // conflito entre paradgmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()