/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - 
O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!*/

const people = [
  {
    numberOfChildren: 2,
    salary: 2000,
  },
  {
    numberOfChildren: 5,
    salary: 3000,
  },
  {
    numberOfChildren: 0,
    salary: 2500,
  },
  {
    numberOfChildren: 2,
    salary: 1000,
  },
  {
    numberOfChildren: 3,
    salary: 2300,
  },
  {
    numberOfChildren: 1,
    salary: 200,
  },
  {
    numberOfChildren: 0,
    salary: -2000,
  },
];

function findAverageAndHighestSalary(peopleInformation) {

  let i = 0;
  let averageSalary = 0;
  let averageChildren = 0;
  let highestSalary = 0;

  while (peopleInformation[i].salary > 0) {       //significa que o while vai estar rodando enquanto o salário formaior que zero. quando ele achar o salário menor que zero, ele para.
    averageSalary = averageSalary + peopleInformation[i].salary
    averageChildren += peopleInformation[i].numberOfChildren
    peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary;
    i++;
  }

  console.log(`média de Salário R$${(averageSalary/i).toFixed(0)}`);
  console.log(`média de filhos ${(averageChildren/i).toFixed(0)}`);
  console.log(`maior Salário R$${highestSalary}`);

}

findAverageAndHighestSalary(people);
