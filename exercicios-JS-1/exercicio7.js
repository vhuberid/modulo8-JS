//Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - 
//Tempo em meses, que o valor está investido. A função deve RETORNAR a taxa de juros, já formatada. 
//Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

function calculate(valorInicial, valorAtual, tempo) {
    const juros = (valorAtual - valorInicial) /  (valorInicial * tempo) //fórmula padrao para calculo de juros de investimento

    console.log((juros * 100).toFixed(2) + "%") // juros*100 pois o valor fornecido vai ser quebrado, e queremos em porcentagem; toFixed estabelecido para 2 casas decimais
}

calculate(1000,1200,10)