// var idade = 18;
// var habilitacao = true;
// if (idade >= 18 && habilitacao === true) {
//     console.log("Pode dirigir, e maior de idade e pussui habilitação.")
// } else if (){

// } else if (idade >= 16 && habilitacao === true) {
//     console.log("Pode dirigir, é menor de idade mas tem permissão e habilitação.")
// } else if(idade < 18 && habilitacao === false) {
//     console.log("Não pode dirigir")
// }


// var numeroDiaSemana = 1;

// switch (numeroDiaSemana) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     case 6:
//         console.log("Sexta-feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Número inválido. Digite um número de 1 a 7.");
//         break;
// }

// var EstadoCivil = "solteiro";

// switch (EstadoCivil) {
//     case "solteiro":
//         console.log("Você é solteiro.");
//         break;
//     case "casado":
//         console.log("Você é casado.");
//         break;
//     case "divorciado":
//         console.log("Você é divorciado.");
//         break;
//     default:
//         console.log("Não encontrado");
//         break;
// }

var Numero1 = 10;
var Numero2 = 20;
var operacao = "divisão";

switch (operacao) {
    case "soma":
        console.log(Numero1 + Numero2);
        break;
    case "divisão":
        console.log(Numero1 / Numero2);
        break;
    case "multiplicação":
        console.log(Numero1 * Numero2);
        break;
    case "subtração":
        console.log(Numero1 - Numero2);
        break;
    default:
        console.log("Não encontrado");
        break;
}