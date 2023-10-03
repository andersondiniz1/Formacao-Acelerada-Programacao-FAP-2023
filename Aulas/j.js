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
// Elabore um programa em JS para que leia 3 numeros e mostre-os em ordem crescente.

// const readline = require('readline-sync');

// // Solicita ao usuário os três números
// const num1 = parseFloat(readline.question("Digite o primeiro número:"));
// const num2 = parseFloat(readline.question("Digite o segundo número:"));
// const num3 = parseFloat(readline.question("Digite o terceiro número:"));

// // Ordena os números em ordem crescente usando um array e o método sort()
// const numeros = [num1, num2, num3];
// numeros.sort((a, b) => a - b);

// // Imprime os números em ordem crescente
// console.log("Números em ordem crescente:", numeros);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Crie um programa ed conversão entre as temperaturas Celsius, Farenheit e Kelvin
// usando funções para isso. O programa deve ler a opção escoljida pelo usuario, 
// que escolhe uma determinada conversão entre escalas termometricas e, em seguida,
// o programa solicita a temperatura a ser convertida. As opções de conversão são as
// seguintas: utilize o switch case!
// 1. de celsius para Fanhrenheit
// 2. de celsius para kelvin.
// 3. de Fanhrenheit para celsius.
// 4. de Fanhrenheit para kelvin.
// 5. de Kelvin para celsius.
// 6. de Kelvin para Fanhrenheit.

// const readline = require('readline-sync');

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function celsiusToKelvin(celsius) {
//     return celsius + 273.15;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// function fahrenheitToKelvin(fahrenheit) {
//     return (fahrenheit - 32) * 5/9 + 273.15;
// }

// function kelvinToCelsius(kelvin) {
//     return kelvin - 273.15;
// }

// function kelvinToFahrenheit(kelvin) {
//     return (kelvin - 273.15) * 9/5 + 32;
// }

// console.log("Opções de conversão:");
// console.log("1. de Celsius para Fahrenheit");
// console.log("2. de Celsius para Kelvin");
// console.log("3. de Fahrenheit para Celsius");
// console.log("4. de Fahrenheit para Kelvin");
// console.log("5. de Kelvin para Celsius");
// console.log("6. de Kelvin para Fahrenheit");

// const opcao = parseInt(readline.question("Escolha uma opção:"));

// const temperatura = parseFloat(readline.question("Digite a temperatura a ser convertida:"));

// switch (opcao) {
//     case 1:
//         console.log(`A temperatura convertida é ${celsiusToFahrenheit(temperatura).toFixed(2)} °F`);
//         break;
//     case 2:
//         console.log(`A temperatura convertida é ${celsiusToKelvin(temperatura).toFixed(2)} K`);
//         break;
//     case 3:
//         console.log(`A temperatura convertida é ${fahrenheitToCelsius(temperatura).toFixed(2)} °C`);
//         break;
//     case 4:
//         console.log(`A temperatura convertida é ${fahrenheitToKelvin(temperatura).toFixed(2)} K`);
//         break;
//     case 5:
//         console.log(`A temperatura convertida é ${kelvinToCelsius(temperatura).toFixed(2)} °C`);
//         break;
//     case 6:
//         console.log(`A temperatura convertida é ${kelvinToFahrenheit(temperatura).toFixed(2)} °F`);
//         break;
//     default:
//         console.log("Opção inválida.");
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fazer uma função que recebe um mes e um ano como parametros e retornar o numero 
// de dias daquele mes daquele ano. Dica: um ano é bissexto quando é multiplo de 4 
// e não multiplo de 100, ou tambem quando é multiplo de 400

// const readline = require('readline-sync');

// function numeroDiasNoMes(mes, ano) {
//     const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
//     if (mes === 2 && (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
//         return 29; // Fevereiro tem 29 dias em anos bissextos
//     }
    
//     return diasPorMes[mes - 1];
// }

// const mes = parseInt(readline.question("Digite o número do mês (1 a 12):"));
// const ano = parseInt(readline.question("Digite o ano:"));

// const numeroDias = numeroDiasNoMes(mes, ano);
// console.log(`O mês ${mes} do ano ${ano} tem ${numeroDias} dias.`);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faça uma função que recebe, por parametro, a hora de inicio e a hora de termino de um jogo, 
// ambas subdivididas em 2 valores distintos: horas e minutos. A função deve retornar, a duração 
// do jogos em minutos, considerando que o tempo maximo de duração, de um jogo é de 24 horas e que 
// o jogo começar em um dia e terminar no outro.

// const readline = require('readline-sync');

// function calcularDuracaoJogo(horaInicio, minutoInicio, horaTermino, minutoTermino) {
//     const minutosPorHora = 60;

//     let minutosTotalInicio = horaInicio * minutosPorHora + minutoInicio;
//     let minutosTotalTermino = horaTermino * minutosPorHora + minutoTermino;

//     if (minutosTotalInicio > minutosTotalTermino) {
//         minutosTotalTermino += 24 * minutosPorHora; // Adiciona 24 horas em minutos se o término for no dia seguinte
//     }

//     return minutosTotalTermino - minutosTotalInicio;
// }

// // Solicita ao usuário a hora de início e término do jogo
// const horaInicio = parseInt(readline.question("Digite a hora de início do jogo: "));
// const minutoInicio = parseInt(readline.question("Digite os minutos de início do jogo: "));
// const horaTermino = parseInt(readline.question("Digite a hora de término do jogo: "));
// const minutoTermino = parseInt(readline.question("Digite os minutos de término do jogo: "));

// const duracaoJogo = calcularDuracaoJogo(horaInicio, minutoInicio, horaTermino, minutoTermino);
// console.log(`A duração do jogo é de ${duracaoJogo} minutos.`);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Escreva a função para calculo do N-ésimo term da série de Fibonacci utilizando recursividade.

// const readline = require('readline-sync');

// function fibonacciRecursivo(n) {
//     if (n <= 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
//     }
// }

// // Solicita ao usuário o valor de N
// const n = parseInt(readline.question("Digite o valor de N: "));

// // Calcula e imprime o N-ésimo termo da série de Fibonacci
// console.log(`O ${n}-ésimo termo da série de Fibonacci é ${fibonacciRecursivo(n)}.`);

////////////////////////////////////////////////////////////////////////////////////////////////////////