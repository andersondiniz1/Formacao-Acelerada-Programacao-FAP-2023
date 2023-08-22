// const usuarios = [
//     {nome: "Anderson", idade: 22},
//     {nome: "Celso", idade: 23},
//     {nome: "Diniz", idade: 24},
// ];

// for (const i in usuarios){
//     console.log(usuarios[i].nome);
//     console.log(usuarios[i].idade);
// }

// for (const elemento of usuarios){
//     console.log(elemento.nome);
//     console.log(elemento.idade);
// }

// Dado um array de numeros [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.
// const numeros = [3, 7, 2, 9, 5];
// for (const numero of numeros) {
//     console.log(numero);
// }

// Suponha que voce tenha um objeto com valores numericos: {a: 10, b:20, c:30, d:40}. Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.
// const objetoNumerico = { a: 10, b: 20, c: 30, d: 40 };
// let soma = 0;
// for (const chave in objetoNumerico) {
//     soma += objetoNumerico[chave];
// }
// console.log("Soma dos valores:", soma);

// Dado um array de numeros [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada numero e par. Se for par, adicione-o a um novo array. No final, exiba o novo array com os numeros pares
// const numeros = [12, 5, 8, 21, 16, 7];
// const numerosPares = [];
// for (const numero of numeros) {
//     if (numero % 2 === 0) {
//         numerosPares.push(numero);
//     }
// }
// console.log("Números pares:", numerosPares);

//Considere um objeto com informações de estudantes = {alice: 18, bob: 20, carol: 19, david:21}; Utileze um loop for in para verificar se ha um estudante com a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console
// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };
// for (const nome in estudantes) {
//     if (estudantes[nome] === 19) {
//         console.log(`${nome}: ${estudantes[nome]}`);
//     }
// }

// imagine que voce tem uma matriz bidimensional representando uma grade de pontos: const pontos = [[2,5,8],[3, 9, 12], [4, 6, 10]]; utilize dois loops "for" aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.
// const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];
// let somaTotal = 0;
// for (const linha of pontos) {
//     for (const valor of linha) {
//         somaTotal += valor;
//     }
// }
// console.log("Soma total dos elementos:", somaTotal);;

//////////////////////////////////////////////////////////////////////////////////////

// const saudacao = function (nome){
//     console.log("Ola", nome)
// }
// console.log(saudacao);

const cliente = {
    nome: "abc",
    idade: 22,
    endereco: "rua cda",
};

const pessoa = new Object();
pessoa.nome = "abc";
pessoa.idade = 22;
pessoa.endereco = "rua cda";

console.log(cliente);
console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa["idade"]);


