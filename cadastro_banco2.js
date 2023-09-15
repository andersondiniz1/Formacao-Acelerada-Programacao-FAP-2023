const readline = require("readline-sync");

class Cliente {
    constructor(nome, cpf, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = "3205"; // Agência fixa
        this.conta = this.gerarContaAleatoria();
        this.saldo = saldo;
        this.transacoes = [];
    }

    sacar(valor) {
        if (!validarValor(valor)) {
            console.log("Valor de saque inválido.");
            return;
        }

        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`);
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    depositar(valor) {
        if (!validarValor(valor)) {
            console.log("Valor de depósito inválido.");
            return;
        }

        this.saldo += valor;
        this.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`);
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }

    gerarContaAleatoria() {
        const numeroConta = Math.floor(10000 + Math.random() * 90000);
        return numeroConta.toString().slice(0, 4) + "-" + numeroConta.toString().slice(-1);
    }

    formatarCPF() {
        return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    listarTransacoes() {
        console.log("Histórico de Transações:");
        for (const transacao of this.transacoes) {
            console.log(transacao);
        }
    }
}

const clientes = [];

function exibirMenu() {
    console.clear();
    console.log("==== SISTEMA BANCÁRIO ====");
    console.log("========== MENU ==========");
    console.log("1 - Listar todos os clientes");
    console.log("2 - Cadastrar um novo cliente");
    console.log("3 - Buscar um cliente");
    console.log("0 - Sair do sistema");
    console.log("==========================");
    console.log();
}

function validarNome(nome) {
    return /^[A-Za-z\s]+$/.test(nome);
}

function validarCPF(cpf) {
    return /^[0-9]{11}$/.test(cpf);
}

function validarValor(valor) {
    return !isNaN(valor) && valor > 0;
}

function excluirCliente(cpf) {
    delete clientes[cpf];
}

function cadastrarCliente() {
    console.clear();
    console.log("=== CADASTRAR CLIENTE ===");
    let nomeCliente = readline.question("Digite seu nome completo: ");

    for (const cpf in clientes) { // cpf = indice 0, 1, 2 ...
        const cliente = clientes[cpf];
        if (cliente.nome === nomeCliente) {
            console.log("Cliente com o mesmo nome já cadastrado.");
            readline.keyInPause();
            return;
        }
    }

    while (!validarNome(nomeCliente)) {
        console.log("Nome inválido. Use apenas letras e espaços.");
        nomeCliente = readline.question("Digite seu nome completo: ");
    }

    let cpfCliente = readline.question("Digite seu CPF (11 dígitos numéricos): ");

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i] == cpfCliente) {
            console.log("Cliente com o mesmo CPF já cadastrado.");
            readline.keyInPause();
            return;
        }
    }

    while (!validarCPF(cpfCliente)) {
        console.log("CPF inválido. Deve conter 11 dígitos numéricos.");
        cpfCliente = readline.question("Digite seu CPF (11 dígitos numéricos): ");
    }

    let saldoCliente = parseFloat(readline.question("Digite o saldo que deseja depositar: "));

    while (!validarValor(saldoCliente)) {
        console.log("Saldo inválido. Deve ser um valor positivo.");
        saldoCliente = parseFloat(readline.question("Digite o saldo que deseja depositar: "));
    }

    const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente);
    clientes.push(novoCliente);
    console.log("Cliente cadastrado com sucesso!");
    readline.keyInPause();
}

function listarClientes() {
    console.clear();
    console.log("=== LISTAR CLIENTES ===");

    let clienteIndex = 1;
    const clientesListados = [];

    for (const cpf in clientes) {
        const cliente = clientes[cpf];
        console.log(`${clienteIndex} - ${cliente.nome}`);
        clientesListados.push(cliente);
        clienteIndex++;
    }

    if (clientesListados.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        readline.keyInPause();
        return;
    }

    const escolha = readline.questionInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");

    if (escolha >= 1 && escolha <= clientesListados.length) {
        const clienteSelecionado = clientesListados[escolha - 1];
        exibirDetalhesCliente(clienteSelecionado);
    } else if (escolha !== 0) {
        console.log("Escolha inválida.");
        readline.keyInPause();
    }
}

function buscarCliente() {
    console.clear();
    console.log("===== BUSCAR CLIENTE =====");
    console.log("1 - Buscar pelo nome");
    console.log("2 - Buscar pelo CPF");
    console.log("0 - Voltar ao menu principal");
    console.log("==========================");
    console.log();

    const escolha = readline.questionInt("Escolha uma opção: ");

    switch (escolha) {
        case 1:
            buscarPorNome();
            break;
        case 2:
            buscarPorCPF();
            break;
        case 0:
            break;
        default:
            console.log("Opção inválida.");
            readline.keyInPause();
    }
}

function buscarPorNome() {
    console.clear();
    console.log("=== BUSCAR CLIENTE POR NOME ===");
    const nomeBusca = readline.question("Digite o nome do cliente: ");
    const clientesEncontrados = [];

    for (const cpf in clientes) {
        const cliente = clientes[cpf];
        if (cliente.nome.toLowerCase().includes(nomeBusca.toLowerCase())) {
            clientesEncontrados.push(cliente);
        }
    }

    if (clientesEncontrados.length === 0) {
        console.log("Nenhum cliente encontrado com esse nome.");
    } else {
        console.log("Clientes encontrados:");
        clientesEncontrados.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome}`);
        });
        const escolha = readline.questionInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");
        if (escolha >= 1 && escolha <= clientesEncontrados.length) {
            const clienteSelecionado = clientesEncontrados[escolha - 1];
            exibirDetalhesCliente(clienteSelecionado);
        } else if (escolha !== 0) {
            console.log("Escolha inválida.");
            readline.keyInPause();
        }
    }
}

function buscarPorCPF() {
    console.clear();
    console.log("=== BUSCAR CLIENTE POR CPF ===");
    const cpfBusca = readline.question("Digite o CPF do cliente (11 dígitos numéricos): ");
    if (validarCPF(cpfBusca)) {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].cpf == cpfBusca) {
                const clienteEncontrado = clientes[i];
                if (clienteEncontrado) {
                    exibirDetalhesCliente(clienteEncontrado);
                } else {
                    console.log("Nenhum cliente encontrado com esse CPF.");
                }
            }
        }
    } else {
        console.log("CPF inválido.");
    }
    readline.keyInPause();
}

function exibirDetalhesCliente(clienteSelecionado) {
    let continua = true;
    while (continua) {
        console.clear();
        console.log("=== DETALHES DO CLIENTE ===");
        console.log(`Nome: ${clienteSelecionado.nome}`);
        console.log(`CPF: ${clienteSelecionado.formatarCPF()}`);
        console.log(`Agência: ${clienteSelecionado.agencia}`);
        console.log(`Conta: ${clienteSelecionado.conta}`);
        console.log(`Saldo: R$ ${clienteSelecionado.saldo.toFixed(2)}`);
        console.log("============================");
        console.log("Opções:");
        console.log("1 - Alterar Cadastro");
        console.log("2 - Sacar Dinheiro");
        console.log("3 - Depositar Dinheiro");
        console.log("4 - Ver Registro de Alterações");
        console.log("5 - Excluir Cliente");
        console.log("6 - Voltar ao menu principal");
        console.log("");

        let opcao = readline.questionInt("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                let novoCPF = readline.question("Digite o novo CPF do Cliente: ");
                // novoCPF = clienteSelecionado.formatarCPF();
                // console.log(novoCPF);
                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].cpf == novoCPF) {
                        console.log("Cliente com o mesmo CPF já cadastrado.");
                        readline.keyInPause();
                        break;
                    }
                }

                let novoNome = readline.question("Digite o novo nome do Cliente: ");
                clienteSelecionado.cpf = novoCPF;
                console.log(clienteSelecionado.cpf);
                clienteSelecionado.nome = novoNome;
                console.log("Informações do cliente atualizadas com sucesso!");
                readline.keyInPause();
                break;
            case 2:
                let valorSaque = parseFloat(readline.question("Digite o valor a sacar: "));
                while (!validarValor(valorSaque)) {
                    console.log("Valor de saque inválido. Digite um número positivo.");
                    valorSaque = parseFloat(readline.question("Digite o valor a sacar: "));
                }
                clienteSelecionado.sacar(valorSaque);
                readline.keyInPause();
                break;
            case 3:
                let valorDeposito = parseFloat(readline.question("Digite o valor a depositar: "));
                while (!validarValor(valorDeposito)) {
                    console.log("Valor de depósito inválido. Digite um número positivo.");
                    valorDeposito = parseFloat(readline.question("Digite o valor a depositar: "));
                }
                clienteSelecionado.depositar(valorDeposito);
                readline.keyInPause();
                break;
            case 4:
                clienteSelecionado.listarTransacoes();
                readline.keyInPause();
                break;
            case 5:
                if (confirmarExclusao()) {
                    const cpfCliente = clienteSelecionado.cpf;
                    excluirCliente(cpfCliente);
                    console.log("Cliente excluído com sucesso.");
                    readline.keyInPause();
                    continua = false;
                }
                break;
            case 6:
                continua = false;
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

function confirmarExclusao() {
    const confirmacao = readline.keyInYN("Tem certeza de que deseja excluir o cliente? (S/N): ");
    return confirmacao;
}

function main() {
    let loop = true;
    while (loop) {
        exibirMenu();
        let opcao = readline.questionInt("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                listarClientes();
                break;
            case 2:
                cadastrarCliente();
                break;
            case 3:
                buscarCliente();
                break;
            case 0:
                console.log("Saindo do sistema...");
                loop = false;
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

main();
