// For Each - ferramenta para percorrer o array

const students = [
    {name: "Vanessa", age:31},
    {name: "Daniel", age:31},
    {name: "Emilia", age:1},
    {name: "Fulano", age:30},
    {name: "Ciclano", age:25},
    {name: "Beltrano", age:20},
    {name: "Alguem", age:15},
];

/* Primeiro: descreve qual array quer percorrer; coloca o nome do array para comecar a funcao. O foreach aceita até 4 argumentos.
Neste caso usamos nome, index é a posicao onde o item se encontra, array: nao precisa ir pro console. log pois é subentendido que
a primeira posicao é o item, a segunda a posicao e o terceiro ele mostra todo o array.

Estrutura:

students.forEach((student,index,array) => {
    console.log(array)
})

*/

//EXEMPLO1: Média de idade dos estudantes:
let studentsAge = 0

students.forEach ((student,index) => {
    studentsAge = studentsAge + student.age
})

let averageAge = studentsAge / students.length
console.log(`A média dos alunos é de ${averageAge.toFixed(0)}`) //toFixed - quantas casas decimais depois da vírgula

students.forEach ((student,index) => {
console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos, e está na posicao ${index} do array`)
})

/*Estrutura sem Arrow Function: 

students.forEach (function(student,index){
console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos, e está na posicao ${index} do array`)
})
*/