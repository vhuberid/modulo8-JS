// Function Anonima

const numberOne = 10
const numberTwo = 20

/*function sum (number1, number2) {       
    return number1+number2                   
}
*/

//OU

const sum = function (number1, number2) {
    const result = number1 + number2
    return result
}

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)
console.log(`A soma dos dois números é ${sum (numberOne, numberTwo)}`)

