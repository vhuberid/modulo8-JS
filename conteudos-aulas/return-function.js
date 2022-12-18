//Return Function
//Return: toda funcao retorna alguma coisa. Sem o comando return a funcao é do tipo VOID (vazia); executa algo e termina;

const numberOne = 10
const numberTwo = 20

function sum (number1, number2) {       //os parametros de dentro da funcao só existem dentro da funcao, pode repetir fora dela se quiser.
    return number1+number2              //return é como se fosse a resposta da funcao; se escrever "banana" a funcao vai retornar banana      
}

//OU const result = number1 + number2
//   return result

//assim que chega no return a funcao para de executar.

console.log(`O primeiro número é ${numberOne}`)

console.log(`O segundo número é ${numberTwo}`)

console.log(`A soma dos dois números é ${sum (numberOne, numberTwo)}`)
//OU
const result = sum (numberOne, numberTwo)
//Estas duas ultimas opcoes vao gerar o mesmo resultado

