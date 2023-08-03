// ESTRUTURAS DE REPETiÇÃO

// let x = 1;
// while (x < 4) { 
//     console.log(x);
//     x = x + 1;
// }

// let b = 1;
// while (b < 4) { 
//     if ( b === 3) {
//         break;
//     }
//     console.log(b);
//     b = b + 1;
// }

// let c = 1;
// while (c <= 10) { 
//     console.log(c);
//     c = c + 1;
// }

// let c = 10;
// while (c > 0) { 
//     console.log(c);
//     c = c - 1;
// }

// let c = 1;
// while (c <= 100) { 
//     console.log(c, "+ 1 =", c);
//     c = c + 1;
// }

// let c = 1;
// while (c <= 10) { 
//     console.log(c);
//     c = c + 1;

// let c = 1;
// let pares = 0; 
// while (c <= 50) {
//   if (c % 2 === 0) {
//     countPp
// }
// console.log("Quantidade de números pares de 1 a 50:", pares);

// let c = 1;
// while (c <= 1000) {  
//     console.log(c);
//     c = c * 2;
// }

// function Primo(c) {
//     if (c <= 1) {
//       return false;
//     }
  
//     let i = 2;
//     while (i <= Math.sqrt(c)) {
//       if (c % i === 0) {
//         return false;
//       }
//       i++;
//     }
  
//     return true;
//   }
  
//   const c = 17;
//   console.log(Primo(c) ? c + ' é um número primo.' : c + ' não é um número primo.');



var senha2 = 1;
var tentativa = 0;
while (senha2 === 1){
    let readlineSync = require('readline-sync');
    let senha = readlineSync.question('Digite a senha: '); 
    senha = parseInt(senha); // Converter a senha para número usando parseInt()

        if (senha === 123){
            console.log("Senha correta");
            senha2 = senha2 + 1;
            break;
        }

        else if (tentativa === 3) {
            console.log("Senha incorreta, tente mais tarde");
            break;
        }

        else if (senha != 123){
            tentativa = tentativa + 1;
            console.log("Senha incorreta, tentativas:", tentativa);
        }
}