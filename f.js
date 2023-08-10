// function exibirSaudacao(nome = 'Anderson', saudacao = 'hello'){
//     console.log(`${nome}, ${saudacao}`);
// }
// exibirSaudacao("Ana", "Ola");

// function saudacao(nome = "Usuário") {
//     console.log(`Olá, ${nome}`);
// }
// saudacao("João");  // Saída: Olá, João
// saudacao();        // Saída: Olá, Usuário


// function calculadora(num1, num2, operacao = "+") {
//     switch (operacao) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             if (num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return "Divisão por zero não é permitida";
//             }
//         default:
//             return "Operação inválida";
//     }
// }
// console.log(calculadora(5, 3, "+"));  // Saída: 8
// console.log(calculadora(10, 2, "-")); // Saída: 8
// console.log(calculadora(4, 6, "*"));  // Saída: 24
// console.log(calculadora(8, 2, "/"));  // Saída: 4
// console.log(calculadora(5, 0, "/"));  // Saída: Divisão por zero não é permitida
// console.log(calculadora(5, 3, "%"));  // Saída: Operação inválida

// function calculadora(num1, num2, operacao = "+") {
//     if (operacao === "+") {
//         return num1 + num2;
//     } else if (operacao === "-") {
//         return num1 - num2;
//     } else if (operacao === "*") {
//         return num1 * num2;
//     } else if (operacao === "/" && num2 !== 0) {
//         return num1 / num2;
//     } else {
//         return "Operação inválida ou divisão por zero";
//     }
// }
// console.log(calculadora(5, 3, "+"));  // Saída: 8
// console.log(calculadora(10, 2, "-")); // Saída: 8
// console.log(calculadora(4, 6, "*"));  // Saída: 24
// console.log(calculadora(8, 2, "/"));  // Saída: 4
// console.log(calculadora(5, 0, "/"));  // Saída: Operação inválida ou divisão por zero
// console.log(calculadora(5, 3, "%"));  // Saída: Operação inválida ou divisão por zero


// function contagemRegressiva(inicio = 10) {
//     while (inicio >= 1) {
//         console.log(inicio);
//         inicio--;
//     }
// }
// contagemRegressiva(5); // Saída: 5, 4, 3, 2, 1
// contagemRegressiva();  // Saída: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// function apresentacao(nome = "Fulano", idade = "30", profissao = "desconhecida") {
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
// }
// apresentacao("João", 25, "engenheiro");
// apresentacao("Maria", 28);
// apresentacao();

// function mensagemPersonalizada(texto, estilo = "normal") {
//     switch (estilo) {
//         case "normal":
//             console.log(texto);
//             break;
//         case "negrito":
//             console.log(`\x1b[1m${texto}\x1b[0m`);
//             break;
//         case "italico":
//             console.log(`\x1b[3m${texto}\x1b[0m`);
//             break;
//         default:
//             console.log(texto);
//     }
// }
// mensagemPersonalizada("Olá, mundo!");
// mensagemPersonalizada("Texto em negrito.", "negrito");
// mensagemPersonalizada("Texto em itálico.", "italico");
// mensagemPersonalizada("Texto com estilo desconhecido.", "sublinhado");
//or
function mensagemPersonalizada(texto, estilo = "normal") {
    const estilos = {
        "normal": "",
        "negrito": "font-weight: bold;",
        "italico": "font-style: italic;"
    };

    console.log(`%c${texto}`, estilos[estilo]);
}
mensagemPersonalizada("Olá, mundo!");
mensagemPersonalizada("Texto em negrito.", "negrito");
mensagemPersonalizada("Texto em itálico.", "italico");
mensagemPersonalizada("Texto com estilo desconhecido.", "sublinhado");