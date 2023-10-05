

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
  
  // // Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média.
  // function calcularMedia(numeros: number[]): number {
  //   if (numeros.length === 0) return 0;
  
  //   let soma = 0;
  //   for (const numero of numeros) {
  //     soma += numero;
  //   }
  
  //   const media = soma / numeros.length;
  //   return media;
  // }
  // const numeros = [10, 20, 30, 40, 50];
  // const media = calcularMedia(numeros);
  // console.log(`A média é: ${media}`);
  
  // crie em typescript uma classe pessoa com os atributos nome, idade e email.
  // class Pessoa {
  //   nome: string;
  //   idade: number;
  //   email: string;
  
  //   constructor(nome: string, idade: number, email: string) {
  //     this.nome = nome;
  //     this.idade = idade;
  //     this.email = email;
  //   }
  // }
  
  // class Aluno extends Pessoa {
  //   matricula: string;
  
  //   constructor(nome: string, idade: number, email: string, matricula: string) {
  //     super(nome, idade, email);
  //     this.matricula = matricula;
  //   }
  // }
  // // Exemplo de uso da classe Aluno
  // const aluno1 = new Aluno("Maria", 25, "maria@email.com", "12345");
  // console.log(`Nome: ${aluno1.nome}, Idade: ${aluno1.idade}, Email: ${aluno1.email}, Matrícula: ${aluno1.matricula}`);
  
  // crie uma classe retangulo com os atributos largura e altura e metodos para calcular a area e o perimetro
  // class Retangulo {
  //   largura: number;
  //   altura: number;
  
  //   constructor(largura: number, altura: number) {
  //     this.largura = largura;
  //     this.altura = altura;
  //   }
  
  //   calcularArea(): number {
  //     return this.largura * this.altura;
  //   }
  
  //   calcularPerimetro(): number {
  //     return 2 * (this.largura + this.altura);
  //   }
  // }
  
  // // Exemplo de uso da classe Retangulo
  // const retangulo1 = new Retangulo(5, 10);
  // console.log(`Largura: ${retangulo1.largura}, Altura: ${retangulo1.altura}`);
  // console.log(`Área: ${retangulo1.calcularArea()}`);
  // console.log(`Perímetro: ${retangulo1.calcularPerimetro()}`);


  // // crie uma classe contaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo
  // class ContaBancaria {
  //   saldo: number;
  //   numeroConta: string;
  
  //   constructor(numeroConta: string, saldoInicial: number = 0) {
  //     this.numeroConta = numeroConta;
  //     this.saldo = saldoInicial;
  //   }
  
  //   depositar(valor: number): void {
  //     if (valor > 0) {
  //       this.saldo += valor;
  //       console.log(`Depósito de ${valor} realizado com sucesso.`);
  //     } else {
  //       console.log('O valor do depósito deve ser maior que zero.');
  //     }
  //   }
  
  //   sacar(valor: number): void {
  //     if (valor > 0 && this.saldo >= valor) {
  //       this.saldo -= valor;
  //       console.log(`Saque de ${valor} realizado com sucesso.`);
  //     } else if (valor <= 0) {
  //       console.log('O valor do saque deve ser maior que zero.');
  //     } else {
  //       console.log('Saldo insuficiente para realizar o saque.');
  //     }
  //   }
  
  //   verificarSaldo(): number {
  //     return this.saldo;
  //   }
  // }
  
  // // Exemplo de uso da classe ContaBancaria
  // const conta1 = new ContaBancaria("12345");
  // console.log(`Número da Conta: ${conta1.numeroConta}`);
  // console.log(`Saldo Inicial: ${conta1.verificarSaldo()}`);
  
  // conta1.depositar(1000);
  // console.log(`Saldo após depósito: ${conta1.verificarSaldo()}`);
  
  // conta1.sacar(500);
  // console.log(`Saldo após saque: ${conta1.verificarSaldo()}`);
  
  // Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o valor total (preço * quantidade).
  // class Produto {
  //   nome: string;
  //   preco: number;
  //   quantidade: number;
  
  //   constructor(nome: string, preco: number, quantidade: number) {
  //     this.nome = nome;
  //     this.preco = preco;
  //     this.quantidade = quantidade;
  //   }
  
  //   calcularValorTotal(): number {
  //     return this.preco * this.quantidade;
  //   }
  // }
  
  // // Exemplo de uso da classe Produto
  // const produto1 = new Produto("Camiseta", 25.0, 3);
  // console.log(`Nome do Produto: ${produto1.nome}`);
  // console.log(`Preço do Produto: R$ ${produto1.preco}`);
  // console.log(`Quantidade em Estoque: ${produto1.quantidade}`);
  // console.log(`Valor Total em Estoque: R$ ${produto1.calcularValorTotal()}`);

  
// Crie uma classe chamada Invoice que possa ser utilizado por uma loja de suprimentos
// de informática para representar uma fatura de um item vendido na loja. Uma fatura deve incluir as seguintes informações como atributos:
// o número do item faturado,
// a descrição do item,
// a quantidade comprada do item e
// o preço unitário do item.
class Invoice {
  numeroItem: string;
  descricaoItem: string;
  quantidadeComprada: number;
  precoUnitario: number;

  constructor(numeroItem: string, descricaoItem: string, quantidadeComprada: number, precoUnitario: number) {
    this.numeroItem = numeroItem;
    this.descricaoItem = descricaoItem;
    this.quantidadeComprada = quantidadeComprada;
    this.precoUnitario = precoUnitario;
  }

  calcularValorTotal(): number {
    return this.quantidadeComprada * this.precoUnitario;
  }
}

// Exemplo de uso da classe Invoice
const fatura1 = new Invoice("001", "Teclado mecânico", 2, 49.99);
console.log(`Número do Item: ${fatura1.numeroItem}`);
console.log(`Descrição do Item: ${fatura1.descricaoItem}`);
console.log(`Quantidade Comprada: ${fatura1.quantidadeComprada}`);
console.log(`Preço Unitário: R$ ${fatura1.precoUnitario.toFixed(2)}`);
console.log(`Valor Total: R$ ${fatura1.calcularValorTotal().toFixed(2)}`);

  
  