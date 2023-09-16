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
            console.log("Erro: Valor de saque inválido. O valor deve ser numérico e maior que zero.");
            return;
        }

        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`);
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Erro: Saldo insuficiente para realizar o saque.");
        }
    }

    depositar(valor) {
        if (!validarValor(valor)) {
            console.log("Erro: Valor de depósito inválido. O valor deve ser numérico e maior que zero.");
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
        console.log("")
        console.log("Histórico de Transações:");
        console.log("")
        for (const transacao of this.transacoes) {
            console.log(transacao);
        }
    }

    exibirDados() {
        console.log("=== DADOS DO CLIENTE ===");
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.formatarCPF()}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Conta: ${this.conta}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log("=========================");
    }
}

class Banco {
    constructor() {
        this.clientes = [];
    }

    cadastrarCliente() {
        console.clear();
        console.log("=== CADASTRAR CLIENTE ===");

        const nomeCliente = obterNomeCliente();
        if (!nomeCliente) return;

        const cpfCliente = obterCPFCliente();
        if (!cpfCliente) return;

        const saldoCliente = obterSaldoCliente();
        if (saldoCliente === null) return;

        const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente);
        this.clientes.push(novoCliente);
        console.log("Cliente cadastrado com sucesso!");
        readline.keyInPause();
    }

    listarClientes() {
        console.clear();
        console.log("=== LISTAR CLIENTES ===");

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado.");
            readline.keyInPause();
            return;
        }

        let clienteIndex = 1;
        for (const cliente of this.clientes) {
            console.log(`${clienteIndex} - ${cliente.nome}`);
            clienteIndex++;
        }

        const escolha = readline.questionInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");

        if (escolha >= 1 && escolha <= this.clientes.length) {
            const clienteSelecionado = this.clientes[escolha - 1];
            exibirDetalhesCliente(clienteSelecionado, this.clientes);
        } else if (escolha !== 0) {
            console.log("Erro: Escolha inválida.");
            readline.keyInPause();
        }
    }

    buscarCliente() {
        console.clear("");
        console.log("===== BUSCAR CLIENTE =====");
        console.log("1 - Buscar pelo nome");
        console.log("2 - Buscar pelo CPF");
        console.log("0 - Voltar ao menu principal");
        console.log("==========================");
        console.log("");

        const escolha = readline.questionInt("Escolha uma opção: ");

        switch (escolha) {
            case 1:
                this.buscarPorNome();
                break;
            case 2:
                this.buscarPorCPF();
                break;
            case 0:
                break;
            default:
                console.log("Erro: Opção inválida.");
                readline.keyInPause();
        }
    }

    buscarPorNome() {
        while (true) {
            console.clear();
            console.log("=== BUSCAR CLIENTE POR NOME ===");
            const nomeBusca = readline.question("Digite o nome do cliente (ou 0 para voltar): ");
            if (nomeBusca === '0') {
                return;
            }

            const clientesEncontrados = [];

            for (const cliente of this.clientes) {
                if (cliente.nome.toLowerCase().includes(nomeBusca.toLowerCase())) {
                    clientesEncontrados.push(cliente);
                }
            }

            if (clientesEncontrados.length === 0) {
                console.log("Nenhum cliente encontrado com esse nome.");
                readline.keyInPause();
            } else {
                console.log("Clientes encontrados:");
                clientesEncontrados.forEach((cliente, index) => {
                    console.log(`${index + 1} - ${cliente.nome}`);
                });

                const escolha = readline.questionInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");
                if (escolha >= 1 && escolha <= clientesEncontrados.length) {
                    const clienteSelecionado = clientesEncontrados[escolha - 1];
                    exibirDetalhesCliente(clienteSelecionado, this.clientes);
                } else if (escolha === 0) {
                    return;
                } else {
                    console.log("Erro: Escolha inválida.");
                    readline.keyInPause();
                }
            }
        }
    }

    buscarPorCPF() {
        while (true) {
            console.clear();
            console.log("=== BUSCAR CLIENTE POR CPF ===");
            const cpfBusca = readline.question("Digite o CPF do cliente (11 dígitos numéricos, ou 0 para voltar): ");

            if (cpfBusca === '0') {
                return;
            }

            if (validarCPF(cpfBusca)) {
                const clienteEncontrado = this.clientes.find(cliente => cliente.cpf === cpfBusca);
                if (clienteEncontrado) {
                    clienteEncontrado.exibirDados();
                    return;
                } else {
                    console.log("Erro: Nenhum cliente encontrado com esse CPF.");
                    readline.keyInPause();
                }
            } else {
                console.log("Erro: CPF inválido.");
                readline.keyInPause();
            }
        }
    }
}

function exibirDetalhesCliente(clienteSelecionado, clientes) {
    let continua = true;
    while (continua) {
        console.clear();
        console.log("=== DETALHES DO CLIENTE ===");
        console.log(`Nome: ${clienteSelecionado.nome}`);
        console.log(`CPF: ${clienteSelecionado.formatarCPF()}`);
        console.log(`Agência: ${clienteSelecionado.agencia}`);
        console.log(`Conta: ${clienteSelecionado.conta}`);
        console.log(`Saldo: R$ ${clienteSelecionado.saldo.toFixed(2)}`);
        console.log("===========================");
        console.log("");
        console.log("Opções:");
        console.log("1 - Alterar CPF ou Nome");
        console.log("2 - Sacar Dinheiro");
        console.log("3 - Depositar Dinheiro");
        console.log("4 - Ver Registro de Alterações");
        console.log("5 - Excluir Cliente");
        console.log("0 - Voltar ao menu principal");
        console.log("===========================");
        console.log("");

        let opcao = readline.questionInt("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                let atualizacaoNomeCpf = false;
                while (true) {
                    console.clear();
                    console.log("=== ALTERAR CPF OU NOME ===");
                    console.log("1 - Alterar Nome");
                    console.log("2 - Alterar CPF");
                    console.log("0 - Voltar ao menu anterior");
                    console.log("===========================");
                    console.log();

                    const escolha = readline.questionInt("Escolha uma opção: ");

                    switch (escolha) {
                        case 0:
                            return;
                        case 1:
                            let novoNome = readline.question("Digite o novo nome do Cliente: ");
                            clienteSelecionado.nome = novoNome;
                            console.log("Nome do cliente atualizado com sucesso!");
                            atualizacaoNomeCpf = true;
                            readline.keyInPause();
                            break;
                        case 2:
                            let novoCPF = readline.question("Digite o novo CPF do Cliente: ");

                            for (let i = 0; i < clientes.length; i++) {
                                if (clientes[i].cpf == novoCPF) {
                                    console.log("Erro: Cliente com o mesmo CPF já cadastrado.");
                                    readline.keyInPause();
                                    break;
                                }
                            }

                            clienteSelecionado.cpf = novoCPF;
                            console.log("CPF do cliente atualizado com sucesso!");
                            atualizacaoNomeCpf = true;
                            readline.keyInPause();
                            break;
                        default:
                            console.log("Erro: Opção inválida!");
                    }

                    if (atualizacaoNomeCpf) {
                        return;
                    }
                }
            case 2:
                let valorSaque = parseFloat(readline.question("Digite o valor a sacar: "));
                while (!validarValor(valorSaque)) {
                    console.log("Erro: Valor de saque inválido. Digite um número positivo.");
                    valorSaque = parseFloat(readline.question("Digite o valor a sacar: "));
                }
                clienteSelecionado.sacar(valorSaque);
                readline.keyInPause();
                break;
            case 3:
                let valorDeposito = parseFloat(readline.question("Digite o valor a depositar: "));
                while (!validarValor(valorDeposito)) {
                    console.log("Erro: Valor de depósito inválido. Digite um número positivo.");
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

            case 0:
                continua = false;
                break;
            default:
                console.log("Erro: Opção inválida!");
        }
    }
}

function excluirCliente(cpf) {
    const indice = banco.clientes.findIndex(cliente => cliente.cpf === cpf);
    if (indice !== -1) {
        // Remova o cliente da lista de clientes
        banco.clientes.splice(indice, 1);
    }
}

function confirmarExclusao() {
    const confirmacao = readline.keyInYN("Tem certeza de que deseja excluir o cliente? (S/N): ");
    return confirmacao;
}

function validarValor(valor) {
    return !isNaN(valor) && valor > 0;
}

function validarCPF(cpf) {
    return /^[0-9]{11}$/.test(cpf);
}

function obterNomeCliente() {
    const nome = readline.question("Digite o nome do cliente: ");
    if (validarNome(nome)) {
        return nome;
    } else {
        console.log("Erro: Nome inválido.");
        readline.keyInPause();
        return null;
    }
}

function obterCPFCliente() {
    const cpf = readline.question("Digite o CPF do cliente (11 dígitos numéricos): ");
    if (validarCPF(cpf)) {
        return cpf;
    } else {
        console.log("Erro: CPF inválido.");
        readline.keyInPause();
        return null;
    }
}

function obterSaldoCliente() {
    const saldo = parseFloat(readline.question("Digite o saldo inicial do cliente: "));
    if (!isNaN(saldo) && saldo >= 0) {
        return saldo;
    } else {
        console.log("Erro: Saldo inválido.");
        readline.keyInPause();
        return null;
    }
}

function validarNome(nome) {
    return /^[A-Za-z\s]+$/.test(nome);
}

const banco = new Banco();

while (true) {
    exibirMenu();
    const opcao = readline.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            banco.cadastrarCliente();
            break;
        case 2:
            banco.listarClientes();
            break;
        case 3:
            banco.buscarCliente();
            break;
        case 0:
            console.log("Encerrando o programa.");
            return;
        default:
            console.log("Erro: Opção inválida.");
            readline.keyInPause();
    }
}

function exibirMenu() {
    console.clear();
    console.log("===== SISTEMA BANCÁRIO =====");
    console.log("1 - Cadastrar Novo Cliente");
    console.log("2 - Listar Clientes");
    console.log("3 - Buscar Cliente");
    console.log("0 - Sair");
    console.log("============================");
    console.log("");
}
