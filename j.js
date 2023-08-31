//     let readlineSync = require('readline-sync');
//     let senha = readlineSync.question('Digite a senha: '); 
//     let nota1 = parseFloat(readlineSync.question('Digite o primeiro número: '));
////////////////////////////////////////////////////////////////////////////////////////////////////////

// let readlineSync = require('readline-sync');
// let nome_aluno = readlineSync.question('digite seu nome: ');
// let nota1 = parseFloat(readlineSync.question('Digite o primeiro número: '));
// let nota2 = parseFloat(readlineSync.question('Digite o segundo número: '));
// let nota3 = parseFloat(readlineSync.question('Digite o segundo número: '));
// let media = (nota1 + nota2 + nota3) / 3;
// console.log("seu nome:", nome_aluno, "e sua media:", media);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faça um programa com javascript para verificar se um determinado ano, fornecido pelo usuario, 
// e bissexto. Um ano pe bissexto se for divisivel por 400 ou se for divisivel por 4 e não for 
// divisivel por 100. exemplos: 1988, 1922, 1996, 2000. Repare que 1900 não e bissexto

// let readlineSync = require('readline-sync');
// let ano = parseInt(readlineSync.question('Digite um ano: '));
// if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
//     console.log(`${ano} é um ano bissexto.`);
// } else {
//     console.log(`${ano} não é um ano bissexto.`);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Uma determinada empresa vende seus produtos em quatro diferentes Estados. Cada estado 
// possui uma taxação de impostos diferente sobre o produto (MG: 7%; S: 12%; RJ: 15%; MS: 8%) 
// faça um programa em javascript, que o usuario entre como valor e o estado destino do produto 
// e o programa retorne o preço final do produto acrescido do imposto correspondente ao estado 
// onde será vendido. O programa deve mostrar uma mensagem de erro caso o estado fornecido não 
// esteja na lista de estados validos.

// let readlineSync = require('readline-sync');
// const taxasImpostos = {
//     'MG': 0.07,
//     'SP': 0.12,
//     'RJ': 0.15,
//     'MS': 0.08
// };
// let valorProduto = parseFloat(readlineSync.question('Digite o valor do produto: '));
// let estadoDestino = readlineSync.question('Digite a sigla do estado destino (MG, SP, RJ, MS): ');
// if (taxasImpostos[estadoDestino] !== undefined) {
//     let precoFinal = valorProduto * (1 + taxasImpostos[estadoDestino]);
//     console.log(`O preço final do produto para o estado ${estadoDestino} é R$ ${precoFinal.toFixed(2)}.`);
// } else {
//     console.log('Estado fornecido não está na lista de estados válidos.');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////
// faça um programa que calcule e mostre a soma dos 50 primeiros numeros pares. faça tres versoes 
// desse programa, cada uma usando uma estrutura de repetição diferente (for, while, do-while). 
// Qual das 3 estruturas e a mais adequada para este programa? por que?

// let somaFor = 0;
// for (let i = 2; i <= 100; i += 2) {
//     somaFor += i;
// }
// console.log("Soma usando for:", somaFor);

// let somaWhile = 0;
// let i = 2;
// while (i <= 100) {
//     somaWhile += i;
//     i += 2;
// }
// console.log("Soma usando while:", somaWhile);

// let somaDoWhile = 0;
// let j = 2;
// do {
//     somaDoWhile += j;
//     j += 2;
// } while (j <= 100);
// console.log("Soma usando do-while:", somaDoWhile);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faça um programa em javascript que receba do usuario um numero N e depois imprima os N primeiros
// numeros naturais impares.

// let readlineSync = require('readline-sync');
// const N = parseFloat(readlineSync.question('Digite o número: '));

// // Inicializa uma variável para contar os números ímpares
// let count = 0;

// // Inicializa uma variável para armazenar o número atual
// let currentNumber = 1;

// // Loop para imprimir os N primeiros números naturais ímpares
// while (count < N) {
//     if (currentNumber % 2 !== 0) {
//         console.log(currentNumber);
//         count++;
//     }
//     currentNumber++;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////
// uma empresa contrata um ncanador a R$ 30,00 por dia. Crie um programa que solicite o numero 
// de dias trabalhados pelo encanador e imprima a quantidade liquida ue devera ser paga, 
// sabendo-se que são descontados 8% para pagamento de impostos e taxas devidas

// // Solicita ao usuário o número de dias trabalhados
// let readlineSync = require('readline-sync');
// const input = parseFloat(readlineSync.question("Digite o número de dias trabalhados:"));

// // Verifica se o input é um número válido
// if (!isNaN(input)) {
//     const diasTrabalhados = parseInt(input);

//     // Valor do pagamento por dia
//     const valorPorDia = 30.00;

//     // Taxa de desconto para impostos e taxas
//     const taxaDesconto = 0.08;

//     // Cálculo do valor bruto
//     const valorBruto = diasTrabalhados * valorPorDia;

//     // Cálculo do valor descontado
//     const valorDescontado = valorBruto * taxaDesconto;

//     // Cálculo do valor líquido
//     const valorLiquido = valorBruto - valorDescontado;

//     // Imprime o valor líquido a ser pago
//     console.log(`Valor líquido a ser pago: R$ ${valorLiquido.toFixed(2)}`);
// } else {
//     console.log("Por favor, digite um número válido.");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faça um programa para ler um horario (hora:minuto:segundo) de inicio e a duração, 
// em segundos, de uma biolgica. O programa deve informar o horario (hora:minuto:segundo) de 
// termino da mesma.

// const readline = require('readline-sync');
// const horarioInicio = readline.question("Digite o horário de início (HH:MM:SS):");
// let horas = horarioInicio.split(":");

// console.log(horas);

// let duracao = 23; // ou qualquer outra duração em horas
// horas[1] = parseInt(horas[1]) + duracao;

// console.log(horas[0]);
// console.log(horas[1]);
// console.log(horas[2]);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra.
// Escreva um programa que leia o total de horas normais e o total de horas extras
// trabalhadas por um empregado em um ano e calcule o salario anual deste trabalhador.

// const readline = require('readline-sync');

// // Solicita ao usuário o total de horas normais e horas extras
// const totalHorasNormais = parseFloat(readline.question("Digite o total de horas normais trabalhadas no ano:"));
// const totalHorasExtras = parseFloat(readline.question("Digite o total de horas extras trabalhadas no ano:"));

// // Valor pago por hora normal e por hora extra
// const valorHoraNormal = 10.00;
// const valorHoraExtra = 15.00;

// // Calcula o salário anual
// const salarioAnual = (totalHorasNormais * valorHoraNormal) + (totalHorasExtras * valorHoraExtra);

// // Imprime o salário anual
// console.log(`O salário anual do trabalhador é R$ ${salarioAnual.toFixed(2)}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////







