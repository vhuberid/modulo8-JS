const calc = (number1, number2, operation) => {
    switch (operation) {
        case "+":
        result = number1 + number2
        break;

        case "-" :
            result = number1 - number2
            break;

        case "*" : 
            result = number1 * number2
            break;
        
        case "/" :
            result = number1 / number2
            break;
    }
    return result
}

console.log(calc(2,4,"+"))
console.log(calc(5,5,"*"))
console.log(calc(20,10,"-"))
console.log(calc(25,5,"/"))