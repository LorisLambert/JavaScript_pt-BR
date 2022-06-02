const { info } = require("console")

function teste1(num){
    if(num > 7)
        console.log(num) // associado ao bloco if
        console.log('Final') // não associado ao bloco if
}

teste1(6)
teste1(8)