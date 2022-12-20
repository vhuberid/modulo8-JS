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


//RESOLUCAO COM TERNÁRIO

const newList = list.map(client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }
    return newList
})
console.log(newList)

/*const newListStudents = students.map(grade => {
    const newListStudents = {
        name: grade.name,
        grade: grade.testGrade,
        result: grade.grade ? "Aprovado" : "Nao aprovado"
    }
    return newListStudents
})
console.log(newListStudents)
*/

//RESOLUCAO COM IF ELSE
const newListStudents = students.map(student => {
    let approvedOrNot
    if (student.testGrade >= 7 ) {
        approvedOrNot = "Aprovado"
        } else {
            approvedOrNot = "Nao aprovado"
        }
        const students = {
            name: student.name,
            result: approvedOrNot
        }
        return students
    })
console.log(newListStudents)