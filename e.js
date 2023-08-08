// function nome(parametro){
// }

// function exibirSaudacao(teste){
//  console.log("Bom dia, ",teste);
// }
//  exibirSaudacao("Anderson");

// function exibirSaudacao(nome, dia, mes) {
//     console.log("Bom dia, ".concat(nome, ". Hoje é o dia ", dia, " do mês ", mes, "."));
// }
// exibirSaudacao("Anderson", 15, 12);

// function exibirSaudacao(nome, dia, mes) {
//     console.log(`Bom dia, ${nome}. Hoje é o dia ${dia} do mês ${mes}.`);
// }
// exibirSaudacao("Anderson", 15, 12);

// function dobro(num){
// console.log(num * 2);
// }
// dobro(2);


// function mostrarNumeros(inicio, fim) {
//     for (let i = inicio; i <= fim; i++) {
//         console.log(i);
//     }
// }
// mostrarNumeros(1, 10);

// function verificarPar(numero) {
//     if (numero % 2 === 0) {
//         console.log(numero + " é um número par.");
//     } else {
//         console.log(numero + " não é um número par.");
//     }
// }
// verificarPar(6);

// function imprimirLista(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// const minhaLista = [1, 2, 3, 4, 5];
// imprimirLista(minhaLista);

function imprimirLista(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Pedindo ao usuário para inserir os elementos do array
const input = prompt("Insira os elementos do array separados por vírgula:");
const elementos = input.split(",").map(item => parseInt(item.trim()));

// Chamando a função para imprimir os elementos do array inserido
imprimirLista(elementos);


