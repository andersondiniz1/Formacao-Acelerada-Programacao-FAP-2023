

//// ts-node main.ts ////

// let nome: string = "Anderson";
// console.log("Ola");

// FUÇÃO SEM RETORNO E SEM PARAMETROS
// function nomeFuncao1(): void { // Voida = não tem retorno
//     console.log("Minha primeira função");
// }
// nomeFuncao1();

// FUÇÃO COM RETORNO E SEM PARAMETROS
// function nomeFuncao2(): string {
//     return "Minha segunda função";
// }
// nomeFuncao2();

// function nomeFuncao3(): number | string {
//     return 10 && "teste";
// }
// nomeFuncao3();

// FUÇÃO SEM RETORNO E COM PARAMETROS
// function nomeFuncao4(nome: string): void {
//     console.log("Bom dia" + nome);
// }
// nomeFuncao4("Anderson");

// FUÇÃO COM RETORNO E COM PARAMETROS
// function nomeFuncao5(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(nomeFuncao5(10.1, 7.3))

///////////////////////////////////////////////////////////
// Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for chamada.
// function saudacao(nome: string): string {
//     return `Olá, ${nome}!`;
//   }
  
//   const mensagem = saudacao("Anderson");
//   console.log(mensagem); 
  
  // Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no console.
//   function dobro(num: number): number {
//     return num * 2;
//   }
//   console.log(dobro(2));

// Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console.
// function mostrarNumeros(inicio: number, fim: number): void {
//     if (inicio <= fim) {
//       for (let i = inicio; i <= fim; i++) {
//         console.log(i);
//       }
//     } else {
//       console.log("O valor de início deve ser menor ou igual ao valor de fim.");
//     }
//   }
//   mostrarNumeros(1, 5);
  
// Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console se o número é par ou não.
// function verificarPar(numero: number): void {
//     if (numero % 2 === 0) {
//       console.log(`${numero} é um número par.`);
//     } else {
//       console.log(`${numero} não é um número par.`);
//     }
//   }
//   verificarPar(4);
//   verificarPar(7);
  
  // Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento desse array no console, um por um.
  // function imprimirLista(lista: any[]): void {
  //   for (const elemento of lista) {
  //     console.log(elemento);
  //   }
  // }
  // const minhaLista = [1, 2, 3, "quatro", "cinco"];
  // imprimirLista(minhaLista);
  
  // Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média.
  function calcularMedia(numeros: number[]): number {
    if (numeros.length === 0) return 0;
  
    let soma = 0;
    for (const numero of numeros) {
      soma += numero;
    }
  
    const media = soma / numeros.length;
    return media;
  }
  const numeros = [10, 20, 30, 40, 50];
  const media = calcularMedia(numeros);
  console.log(`A média é: ${media}`);
  
  