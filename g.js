// try {
//     cliente = {
//     "nome": "teste",
//     "idade": 51,
//     };
//     console.log(pessoa.codigo);
// } catch (ex) {
//     console.log(ex.message);
// }

// try {
//     let readlineSync = require('readline-sync');
//     let numero = readlineSync.question("Digite um número:"); 
//     let resultado = 10 / numero;

//     if (resultado === Infinity || resultado === -Infinity) {
//         throw new Error("Erro: divisão por zero");   
//     }
//     console.log("O resultado da divisão é:", resultado);
// } catch (error) {
//     console.log(error.message);
// }

 
try {
    let readlineSync = require('readline-sync');
    let entrada = readlineSync.question("Digite um número:"); 
    let numero = parseInt(entrada); // Tenta converter para número

    if (isNaN(numero)) {
        throw new Error("Erro: conversão inválida");
    }

    console.log("Número convertido:", numero);
} catch (error) {
    console.log(error.message);
}





