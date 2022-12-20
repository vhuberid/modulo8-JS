const numbers = [1, 2, 3, 4]

const students = [
    {name: "Vanessa", age:31},
    {name: "Daniel", age:31},
    {name: "Emilia", age:1},
    {name: "Fulano", age:30},
    {name: "Ciclano", age:25},
    {name: "Beltrano", age:20},
    {name: "Alguem", age:15},
];

//Exemplo 1: chamar mais de um map na mesma funcao

const double = number => number * 2     //criada a estrutura fora do map, e ele puxou a informacao dentro da funcao
const sum = number => number + 10
const minus = number => number - 5

const newArray2 = numbers.map(double).map(sum).map(minus) //aqui ele pegou o array original, criou um novo array, 
//multiplicou por 2 e imediatamente releu o array e comecou a somar 10 elogo após reduzir 5

console.log(newArray2)

//Exemplo 2: vida real, multiplicar e transformar os numeros em reais

const double2 = number => number * 2
const toReais = number => `R$ ${number.toFixed(2)}`

const newArray3 = numbers.map(double2).map(toReais)
console.log(newArray3)

