/* Map: cria um novo array a partir do array percorrido com a MESMA QUANTIDADE de itens do array original. Aceita 3 parametros:
item do array, index, array completo.
Diferenca entre For Each e Map: For Each nao retorna nada, ele só percorre os itens e faz a leitura do dado. O Map retorna o valor
e se pode guardar o novo array em algum lugar.*/

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

const newArray = numbers.map((number) => {
    return number * 2
})
console.log(numbers)  //o array original segue existindo
console.log(newArray) //cria um novo array e guarda o que for solicitado para este array (ex: x2)


const newStudents = students.map((students) => {
    const newStudents = {
        name: students.name + " Sobrenome",
        age: students.age + 1,
        }
        return newStudents
})

console.log(newStudents)