//ARRAY - métodos

const students = ["Joao", "Maria", "Pedro", "Carla", "Bia", "Mauricio"]

//push - serve para adicionar itens ao Array; sempre é adicionada ao final do Array
students.push("Vanessa") 
console.log(students)

//lenght - serve para saber a extensao do Array (comeca na posicao 0)
console.log(students.length)

//sort - organiza o Array por ordem alfabética
console.log(students.sort())

//delete - deleta um item do array sem remover da lista do array 
delete students[0]
console.log(students)

//splice - unir/ligar - múltiplas opcoes para usar o splice
students.splice(1,2,"Vanessa")  //primeiro número é onde comeca,segundo número quantas posicoes sao "ligadas". O nome em aspas é adicionado após a primeira acao
console.log(students)

//slice - fatiar o array
const newstudents = students.slice(1,3) //se só adicionar um número, ele comeca a contar a partir dali em diante. O segundo número é onde ele para
console.log(newstudents)

//DIFERENCA ENTRE SLICE E SPLICE: SPLICE MODIFICA O ARRAY ORIGINAL; SLICE NAO MODIFICA, ELE CRIA UM NOVO ARRAY, 
//por isso ele precisa de uma const para ele e armazenar o novo array!!!

//pop - tira o último item do array
students.pop()
console.log(students)

//shift - tira o primeiro item do array
students.shift()
console.log(students)