const prompt = require('prompt-sync')({sigint:true})

let num1 = parseFloat(prompt("digite um número"));
let num2 = parseFloat(prompt("Digite outro número"));
let operacao = parseInt(prompt("Digite o número da operação que deseja: 1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão"));

function calculadora(num1, num2, operacao){

    switch (operacao){

        case 1: 
            return num1 + num2 
        
        case 2: 
            return num1 - num2
             
        case 3:  
            return num1 * num2
            
        case 4:
            return num1 / num2

         break

        default:
        return "Essa opção não existe.";
    }
}

console.log(calculadora(num1,num2,operacao));