/* Desafio: primeiro adicionar 10% de valor de mercado a todas as cias; após, selecionar as empresas fundadas antes dos anos 2000;
por último somar o valor de mercado das que restaram.*/

const companies = [
    {name: "Samsung", marketValue:50, CEO: "Kim Hyun Suk", foundedOn: 1938},
    {name: "Microsoft", marketValue:415, CEO: "Satya Nadella", foundedOn: 1975},
    {name: "Intel", marketValue:117, CEO: "Brian Krzanich", foundedOn: 1968},
    {name: "Facebook", marketValue:383, CEO: "Mark Zuckerberg", foundedOn: 2004},
    {name: "Spotify", marketValue:30, CEO: "Daniel Ek", foundedOn: 2006},
    {name: "Apple", marketValue:845, CEO: "Tim Cook", foundedOn: 1976},
];

/*const companiesAddedTenPorcent = companies.map((companies) => {
    const companiesAddedTenPorcent = {
        marketvalue: companies.marketvalue /100 + companies.marketValue,
        }
        return companiesAddedTenPorcent
    })*/

let marketValuePlusTenPercent = company => {
    company.marketValue = company.marketValue + company.marketValue/10
    return company
}
const oldCompanies = company => company.foundedOn <2000
const sumMarketValue = (acc,company) => acc + company.marketValue

const newCompanies = companies.map(marketValuePlusTenPercent).filter(oldCompanies).reduce(sumMarketValue,0)

console.log(newCompanies)

