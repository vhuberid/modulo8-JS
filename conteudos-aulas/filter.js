/* Filter, assim como o Map, cria um novo array a partir do array original
Mas o filter FILTRA - nao necessariamente com a mesma quantidade de itens originais. 
*/

const list = [
    {name: "Vanessa", vip:true},
    {name: "Maria", vip:false},
    {name: "Joao", vip:true},
    {name: "Bruno", vip:true},
    {name: "Carla", vip:false},
    {name: "Ana", vip:true},
    {name: "Julio", vip:false},
];

const students = [
    {name: "Vanessa", testGrade:7},
    {name: "Maria", testGrade:5},
    {name: "Joao", testGrade:8},
    {name: "Bruno", testGrade:9},
    {name: "Carla", testGrade:3},
    {name: "Ana", testGrade:2},
    {name: "Julio", testGrade:10},
];


//Exemplo: criar um novo array apenas com as pessoas que sao vips e com os alunos com notas maiores ou igual a 7:

const justVips = list.filter(client => {
    return client.vip
})
console.log(justVips)


const newStudentsList = students.filter(student => {
    return student.testGrade >= 7
})
console.log(newStudentsList)