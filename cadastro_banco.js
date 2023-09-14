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

function validarNome(nome) {
  return /^[A-Za-z\s]+$/.test(nome);
}

function validarCPF(cpf) {
  return /^[0-9]{11}$/.test(cpf);
}

function validarSaldo(saldo) {
  return saldo >= 0;
}

function cadastrarCliente() {
  console.clear();
  console.log("=== CADASTRAR CLIENTE ===");
  let nomeCliente = readline.question("Digite seu nome completo: ");
  while (!validarNome(nomeCliente)) {
    console.log("Nome inválido. Use apenas letras e espaços.");
    nomeCliente = readline.question("Digite seu nome completo: ");
  }
  
  let cpfCliente = readline.question("Digite seu CPF (11 dígitos numéricos): ");
  while (!validarCPF(cpfCliente)) {
    console.log("CPF inválido. Deve conter 11 dígitos numéricos.");
    cpfCliente = readline.question("Digite seu CPF (11 dígitos numéricos): ");
  }
  
  let saldoCliente = readline.questionFloat("Digite o saldo que deseja depositar: ");
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
  console.log("Listando todos os clientes");
  for (const cpf in clientes) {
    const cliente = clientes[cpf];
    console.log("------------------------");
    console.log(`Nome: ${cliente.nome}`);
    console.log(`CPF: ${cliente.formatarCPF()}`);
    console.log(`Agência: ${cliente.agencia}`);
    console.log(`Conta: ${cliente.conta}`);
    console.log(`Saldo: R$ ${cliente.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  }
  console.log("------------------------");
  readline.keyInPause();
}

function excluirCliente(cpf) {
  if (clientes[cpf]) {
    const confirmacao = readline.keyInYNStrict("Tem certeza de que deseja excluir este cliente? ");
    if (confirmacao) {
      delete clientes[cpf];
      console.log("Cliente excluído com sucesso!");
      readline.keyInPause();
    }
  }
}

function buscarCliente() {
  let buscaCPF = readline.question("Digite o CPF do cliente que deseja buscar: ");
  const cliente = clientes[buscaCPF];
  if (cliente) {
    while (true) {
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
      
      let opcao = readline.questionInt("Escolha uma opção: ");
      switch (opcao) {
        case 1:
          let valorSaque = readline.questionFloat("Digite o valor a sacar: ");
          cliente.sacar(valorSaque);
          break;
        case 2:
          let valorDeposito = readline.questionFloat("Digite o valor a depositar: ");
          cliente.depositar(valorDeposito);
          break;
        case 3:
          console.clear();
          console.log("=== REGISTRO DE ALTERAÇÕES ===");
          for (const transacao of cliente.transacoes) {
            console.log(transacao);
          }
          console.log("===============================");
          readline.keyInPause();
          break;
        case 4:
          excluirCliente(cliente.cpf);
          return; // Voltar ao menu principal após excluir
        case 5:
          return; // Voltar ao menu principal
        default:
          console.log("Opção inválida!");
      }
    }
  } else {
    console.log("Cliente não encontrado.");
    readline.keyInPause();
  }
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
4