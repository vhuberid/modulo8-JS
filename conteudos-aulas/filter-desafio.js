//Desafio 1: separar apenas os numeros pares e divisiveis por 5:

const list = [20,3,234,12,17,541,6,87,275,1000]; 

const listEvenAndDiv5 = list.filter(number => {
    if (number % 2 === 0 && number % 5 === 0) 
    return true
    else return false
})

console.log(listEvenAndDiv5)

//Desafio 2: separar apenas empresas fundadas depois de 1975 e que tenham mais de 200mi de valor de mercado.

const companies = [
    {name: "Samsung", marketValue:50, CEO: "Kim Hyun Suk", foundedOn: 1938},
    {name: "Microsoft", marketValue:415, CEO: "Satya Nadella", foundedOn: 1975},
    {name: "Intel", marketValue:117, CEO: "Brian Krzanich", foundedOn: 1968},
    {name: "Facebook", marketValue:383, CEO: "Mark Zuckerberg", foundedOn: 2004},
    {name: "Spotify", marketValue:30, CEO: "Daniel Ek", foundedOn: 2006},
    {name: "Apple", marketValue:845, CEO: "Tim Cook", foundedOn: 1976},
];

const companiesFoundedAfter75AndWorthMore2mi = companies.filter(company => {
    if (company.marketValue >= 200 && company.foundedOn > 1975) 
    return true
    else return false
})
console.log(companiesFoundedAfter75AndWorthMore2mi)