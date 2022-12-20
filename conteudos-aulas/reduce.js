/* REDUCE: assim como o map e o filter ele cria um array, mas o reduce pode retornar somente um valor - uma string, um numero...
O reduce aceita 4 parametros: acumulador; valor atual; index; array completo.*/

const listNumbers = [1, 2, 3, 4];

const sum = listNumbers.reduce( (acc,current) => {
    return acc + current
},0)
console.log(sum)

/* OU
const sum = list.reduce((acc,current) => acc+current, 0)

O QUE O REDUCE FEZ:
estabeleceu que o valor inicial era zero. Ele iniciou no 0 e adicionou 1, e deu return. Ele segue guardando no acumulador, e na seguda
passagem ele pegou o acumulador e somou o 2.
1+2+3+4 = 10
*/