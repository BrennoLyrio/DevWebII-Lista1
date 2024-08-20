const prompt = require ('prompt-sync') ({sigint: true})
var opcao = prompt("Digite uma opção ")
switch(parseInt(opcao)){
    case 1:
        console.log("Opção 1")
        break
    case 2:
        console.log("opcao 2")
        break
    case 3:
        console.log("opcao 3")
        break
}