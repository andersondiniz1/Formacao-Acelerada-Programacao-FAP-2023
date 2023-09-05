const readline = require("readline-sync");

const aluno1 = {
    nome: "Anderson",
    notas: [8, 7, 6],
};
const aluno2 = {
    nome: "Paulo",
    notas: [5, 9.5, 3],
};
const aluno3 = {
    nome: "Leandro",
    notas: [4, 2, 7],
};
const aluno4 = {
    nome: "Jorge",
    notas: [10, 4.5, 9],
};

const alunos = [aluno1, aluno2, aluno3, aluno4];

console.log("======== CADASTRO DE ALUNOS =========");
console.log("=============== MENU ================");
console.log("1 - Listar todos os alunos detalhadamente");
console.log("2 - Listar apenas os nomes dos alunos");
console.log("3 - Listar apenas média dos alunos");
console.log("0 - Sair do sistema.");
console.log("=====================================");

let loop = true;
while (loop) {
    let opcao = readline.questionInt("Escolha uma opção: ");
    switch (opcao) {
        case 1:
            console.log("\nListando todos os alunos detalhadamente:");
            console.log("=====================================");
            for (const aluno of alunos) {
                console.log(`Nome: ${aluno.nome}`);
                console.log(`Notas: ${aluno.notas}`);
                for (let i = 0; i < aluno.notas.length; i++) {
                    console.log(`\tNota ${i + 1}: ${aluno.notas[i]}`);
                }
                console.log("=====================================");
            }
            break;
        case 2:
            console.log("\nListando apenas os nomes dos alunos:");
            console.log("=====================================");
            for (const aluno of alunos) {
                console.log(`Nome: ${aluno.nome}`);
            }
            console.log("=====================================");
            break;
        case 3:
            console.log("\nCalculando a média de cada aluno:");
            console.log("=====================================");
            
            for (const aluno of alunos) {
                const media = aluno.notas.reduce((total, nota) => total + nota) / aluno.notas.length;
            
                console.log(`Nome: ${aluno.nome}`);
                console.log(`Média: ${media.toFixed(2)}`); // Arredonda a média para 2 casas decimais
                console.log("=====================================");
            }
            break;            
        case 0:
            console.log("\nSaindo do sistema...");
            loop = false;
            break;
        default:
            console.log("\nOpção inválida!");
            break;
    }
}
