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

  gerarContaAleatoria() {
    const numeroConta = Math.floor(10000 + Math.random() * 90000);
    return numeroConta.toString().slice(0, 4) + "-" + numeroConta.toString().slice(-1);
  }

  formatarCPF() {
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`);
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`);
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de saque inválido ou saldo insuficiente.");
    }
  }

  listarTransacoes() {
    console.log("Histórico de Transações:");
    for (const transacao of this.transacoes) {
      console.log(transacao);
    }
  }
}

const clientes = {};

function exibirMenu() {
  console.clear();
  console.log("=== SISTEMA BANCÁRIO ===");
  console.log("========== MENU ==========");
  console.log("1 - Listar todos os clientes");
  console.log("2 - Cadastrar um novo cliente");
  console.log("3 - Buscar um cliente");
  console.log("0 - Sair do sistema");
  console.log("==========================");
}

// Função para validar se o nome contém apenas letras e espaços.
function validarNome(nome) {
  return /^[A-Za-z\s]+$/.test(nome);
}

// Função para validar se o CPF contém 11 dígitos numéricos.
function validarCPF(cpf) {
  return /^[0-9]{11}$/.test(cpf);
}

// Função para validar se o saldo é um número válido (positivo).
function validarSaldo(saldo) {
  return !isNaN(saldo) && saldo >= 0;
}

function cadastrarCliente() {
  console.clear();
  console.log("=== CADASTRAR CLIENTE ===");
  let nomeCliente = readline.question("Digite seu nome completo: ");

  // Verifica se o nome é válido.
  while (!validarNome(nomeCliente)) {
    console.log("Nome inválido. Use apenas letras e espaços.");
    nomeCliente = readline.question("Digite seu nome completo: ");
  }

  let cpfCliente = readline.question("Digite seu CPF (11 dígitos numéricos): ");

  // Verifica se o CPF é válido.
  while (!validarCPF(cpfCliente)) {
    console.log("CPF inválido. Deve conter 11 dígitos numéricos.");
    cpfCliente = readline.question("Digite seu CPF (11 dígitos numéricos): ");
  }

  let saldoCliente = readline.questionFloat("Digite o saldo que deseja depositar: ");

  // Verifica se o saldo é válido.
  while (!validarSaldo(saldoCliente)) {
    console.log("Saldo inválido. Deve ser um valor positivo.");
    saldoCliente = readline.questionFloat("Digite o saldo que deseja depositar: ");
  }

  const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente);
  clientes[cpfCliente] = novoCliente;
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
    // Redireciona para a função buscarCliente com o cliente selecionado.
    buscarCliente(clientesListados[escolha - 1]);
  } else if (escolha !== 0) {
    console.log("Escolha inválida.");
    readline.keyInPause();
  }
}

function buscarCliente(clienteSelecionado) {
  console.clear();
  console.log("=== DETALHES DO CLIENTE ===");
  console.log(`Nome: ${clienteSelecionado.nome}`);
  console.log(`CPF: ${clienteSelecionado.formatarCPF()}`);
  console.log(`Agência: ${clienteSelecionado.agencia}`);
  console.log(`Conta: ${clienteSelecionado.conta}`);
  console.log(`Saldo: R$ ${clienteSelecionado.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log("============================");
  console.log("Opções:");
  console.log("1 - Sacar Dinheiro");
  console.log("2 - Depositar Dinheiro");
  console.log("3 - Ver Registro de Alterações");
  console.log("4 - Excluir Cliente");
  console.log("5 - Voltar ao menu principal");

  let opcao = readline.questionInt("Escolha uma opção: ");
  switch (opcao) {
    case 1:
      let valorSaque = readline.questionFloat("Digite o valor a sacar: ");
      clienteSelecionado.sacar(valorSaque);
      break;
    case 2:
      let valorDeposito = readline.questionFloat("Digite o valor a depositar: ");
      clienteSelecionado.depositar(valorDeposito);
      break;
    case 3:
      console.clear();
      console.log("=== REGISTRO DE ALTERAÇÕES ===");
      for (const transacao of clienteSelecionado.transacoes) {
        console.log(transacao);
      }
      console.log("===============================");
      readline.keyInPause();
      break;
    case 4:
      if (confirmarExclusao()) {
        excluirClientePorCPF(clienteSelecionado.cpf);
        console.log("Cliente excluído com sucesso.");
        readline.keyInPause();
        return;
      }
      break;
    case 5:
      return;
    default:
      console.log("Opção inválida!");
  }
}

function confirmarExclusao() {
  const confirmacao = readline.keyInYN("Tem certeza de que deseja excluir o cliente? (S/N): ");
  return confirmacao;
}

function exibirDetalhesCliente(cliente) {
  console.clear();
  console.log("=== DETALHES DO CLIENTE ===");
  console.log(`Nome: ${cliente.nome}`);
  console.log(`CPF: ${cliente.formatarCPF()}`);
  console.log(`Agência: ${cliente.agencia}`);
  console.log(`Conta: ${cliente.conta}`);
  console.log(`Saldo: R$ ${cliente.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  console.log("============================");
  console.log("Opções:");
  console.log("1 - Sacar Dinheiro");
  console.log("2 - Depositar Dinheiro");
  console.log("3 - Ver Registro de Alterações");
  console.log("4 - Excluir Cliente");
  console.log("5 - Voltar ao menu principal");
}

function clienteExistentePorNome(nome) {
  for (const cpf in clientes) {
    if (clientes[cpf].nome === nome) {
      return true;
    }
  }
  return false;
}

function clienteExistentePorCPF(cpf) {
  return !!clientes[cpf];
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
