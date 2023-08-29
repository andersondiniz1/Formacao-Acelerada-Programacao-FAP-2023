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


