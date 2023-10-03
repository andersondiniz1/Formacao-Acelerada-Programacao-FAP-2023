const readline = require("readline-sync");

let matricula = 1; // Inicializa a matrícula com 1

// Definição dos alunos
const aluno1 = {
    matricula: matricula++,
    nome: "Anderson",
    notas: [8, 7, 6],
};
const aluno2 = {
    matricula: matricula++,
    nome: "Paulo",
    notas: [5, 9.5, 3],
};
const aluno3 = {
    matricula: matricula++,
    nome: "Leandro",
    notas: [4, 2, 7],
};
const aluno4 = {
    matricula: matricula++,
    nome: "Jorge",
    notas: [10, 4.5, 9],
};

// Array para armazenar todos os alunos
const alunos = [aluno1, aluno2, aluno3, aluno4];

// Exibição do menu
console.log("======== CADASTRO DE ALUNOS =========");
console.log("=============== MENU ================");
console.log("1 - Listar todos os alunos detalhadamente.");
console.log("2 - Listar apenas os nomes dos alunos.");
console.log("3 - Listar apenas média dos alunos.");
console.log("4 - Cadastrar novo aluno.");
console.log("5 - Buscar ou excluir um aluno");
console.log("0 - Sair do sistema.");
console.log("=====================================");

// Loop principal do programa
let loop = true;
while (loop) {
    let opcao = readline.questionInt("Escolha uma opção: ");
    switch (opcao) {
        case 1:
            console.log("\nListando todos os alunos detalhadamente:");
            console.log("=====================================");
            for (const aluno of alunos) {
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                console.log(`Notas: ${aluno.notas}`);
                for (let i = 0; i < aluno.notas.length; i++) {
                    console.log(`\tNota ${i + 1}: ${aluno.notas[i]}`);
                }
                console.log("=====================================");
            }
            console.log("");
            console.log("=====================================");
            console.log("======== CADASTRO DE ALUNOS =========");
            console.log("=============== MENU ================");
            console.log("1 - Listar todos os alunos detalhadamente.");
            console.log("2 - Listar apenas os nomes dos alunos.");
            console.log("3 - Listar apenas média dos alunos.");
            console.log("4 - Cadastrar novo aluno.");
            console.log("5 - Buscar ou excluir um aluno.");
            console.log("0 - Sair do sistema.");
            console.log("=====================================");
            console.log("");
            break;
        case 2:
            console.log("\nListando apenas os nomes dos alunos:");
            console.log("=====================================");
            for (const aluno of alunos) {
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
            }
            console.log("");
            console.log("=====================================");
            console.log("======== CADASTRO DE ALUNOS =========");
            console.log("=============== MENU ================");
            console.log("1 - Listar todos os alunos detalhadament.");
            console.log("2 - Listar apenas os nomes dos alunos.");
            console.log("3 - Listar apenas média dos alunos.");
            console.log("4 - Cadastrar novo aluno.");
            console.log("5 - Buscar ou excluir um aluno.");
            console.log("0 - Sair do sistema.");
            console.log("=====================================");
            console.log("");
            break;
        case 3:
            console.log("\nCalculando a média de cada aluno:");
            console.log("=====================================");
            
            for (const aluno of alunos) {
                const media = aluno.notas.reduce((total, nota) => total + nota) / aluno.notas.length;
            
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                console.log(`Média: ${media.toFixed(2)}`); // Arredonda a média para 2 casas decimais
                console.log("=====================================");
            }
            console.log("");
            console.log("======== CADASTRO DE ALUNOS =========");
            console.log("=============== MENU ================");
            console.log("1 - Listar todos os alunos detalhadamente.");
            console.log("2 - Listar apenas os nomes dos alunos.");
            console.log("3 - Listar apenas média dos alunos.");
            console.log("4 - Cadastrar novo aluno.");
            console.log("5 - Buscar ou excluir um aluno.");
            console.log("0 - Sair do sistema.");
            console.log("=====================================");
            console.log("");
            break;
        case 4:
            console.log("\nCadastrar novo aluno:");
            console.log("=====================================");
                
            const nomeAluno = readline.question("Digite o nome do Aluno: ");
            const notasAluno = [];
            
            for (let i = 0; i < 3; i++) {
                const nota = readline.questionFloat(`Digite a nota ${i + 1}: `);
                notasAluno.push(nota);
            }
            
            const novoAluno = {
                matricula: matricula++, // Incrementa a matrícula e atribui ao novo aluno
                nome: nomeAluno,
                notas: notasAluno,
            };
            
            alunos.push(novoAluno);
            
            console.log("\nNovo aluno cadastrado com sucesso!");
            console.log("");
            console.log("=====================================");
            console.log("======== CADASTRO DE ALUNOS =========");
            console.log("=============== MENU ================");
            console.log("1 - Listar todos os alunos detalhadamente.");
            console.log("2 - Listar apenas os nomes dos alunos.");
            console.log("3 - Listar apenas média dos alunos.");
            console.log("4 - Cadastrar novo aluno.");
            console.log("5 - Buscar ou excluir um aluno.");
            console.log("0 - Sair do sistema.");
            console.log("=====================================");
            console.log("");
            break;
            case 5: 
                console.log("\nBuscar um aluno:");
                console.log("=====================================");
            
                const busca = readline.question("Digite o nome ou a matrícula do aluno que deseja buscar: ");
                const alunoEncontrado = alunos.find(
                    aluno => aluno.nome === busca || aluno.matricula === Number(busca)
                );
            
                if (alunoEncontrado) {
                    console.log("\nAluno encontrado:");
                    console.log(`Matrícula: ${alunoEncontrado.matricula}`);
                    console.log(`Nome: ${alunoEncontrado.nome}`);
                    console.log(`Notas: ${alunoEncontrado.notas}`);
            
                    const opcao = readline.keyInSelect(
                        ["Alterar dados do aluno", "Excluir aluno", "Cancelar"],
                        "Escolha o que deseja fazer:"
                    );                    
            
                    switch (opcao) {
                        case 0:
                            const novoNome = readline.question("Digite o novo nome do aluno (ou deixe em branco para manter o mesmo): ");
                            if (novoNome) {
                                alunoEncontrado.nome = novoNome;
                            }
            
                            const alterarNotas = readline.keyInYN("Deseja alterar as notas do aluno? (Y/N): ");
                            if (alterarNotas) {
                                console.log("\nAlterar notas do aluno:");
                                for (let i = 0; i < alunoEncontrado.notas.length; i++) {
                                    const novaNota = readline.questionFloat(`Digite a nova nota ${i + 1}: `);
                                    alunoEncontrado.notas[i] = novaNota;
                                }
                            }
            
                            const novaMatricula = readline.questionInt("Digite a nova matrícula do aluno (ou digite 0 para manter a mesma): ");
                            if (novaMatricula !== 0) {
                                alunoEncontrado.matricula = novaMatricula;
                            }
            
                            console.log("\nDados do aluno alterados com sucesso!");
                            break;
                        case 1:
                            const confirmacao = readline.keyInYN("Tem certeza que deseja realmente excluir este aluno? (Y/N): ");
                            if (confirmacao) {
                                // Encontra o índice do aluno no array
                                const indiceAluno = alunos.indexOf(alunoEncontrado);
                                // Remove o aluno do array
                                alunos.splice(indiceAluno, 1);
                                console.log("\nAluno excluído com sucesso!");
                            } else {
                                console.log("\nOperação de exclusão cancelada.");
                            }
                            break;
                        case 2:
                            console.log("\nOperação cancelada.");
                            break;
                        default:
                            console.log("\nOpção inválida.");
                            break;
                    }
                } else {
                    console.log("\nAluno não encontrado.");
                }
            
                console.log("");
                console.log("=====================================");
                console.log("======== CADASTRO DE ALUNOS =========");
                console.log("=============== MENU ================");
                console.log("1 - Listar todos os alunos detalhadamente");
                console.log("2 - Listar apenas os nomes dos alunos");
                console.log("3 - Listar apenas média dos alunos");
                console.log("4 - Cadastrar novo aluno");
                console.log("5 - Buscar, alterar ou excluir um aluno");
                console.log("0 - Sair do sistema.");
                console.log("=====================================");
                console.log("");
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
