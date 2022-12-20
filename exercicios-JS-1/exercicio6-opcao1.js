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
  //iniciou criando tres variáveis, que sao os dados a serem encontrados/colhidos. Todos vao comecar em 0:
  let averageSalary = 0;
  let averageChildren = 0;
  let highestSalary = 0;
  /*cada vez que o for dá uma "passada", cada ciclo do for, ele pega uma posicao do array e le. A cada posicao que ele passa,
    ele pega as informacoes do array
    */
  for (let i = 0; i <= peopleInformation.length; i++) {
    const salary = peopleInformation[i].salary;
    const children = peopleInformation[i].numberOfChildren;

    if (salary > highestSalary) highestSalary = salary;

    /*aqui sao as passagens por salario. Ao passar pelo array, ele le a informacao
        do salario e a pergunta aqui é: o salario que está sendo lido, é maior que meu salário atual? o primeiro vai ser 0 e a partir daí ele vai
        guardar a maior informacao, ou seja, nas passadas, ele guarda o maior salário que encontrar. Se encontrar um salário menor, ele
        nao substitui e segue as leituras*/

    if (salary < 0) {
      console.log(`média de Salário R$${(averageSalary / i).toFixed(0)}`);
      console.log(`média de filhos ${(averageChildren / i).toFixed(0)}`);
      console.log(`maior Salário R$${highestSalary}`);
      break;
    } else {
      averageSalary = averageSalary + salary;
      averageChildren += children;
    }
  }
}

findAverageAndHighestSalary(people)
