// Definindo uma interface chamada "Pessoa"
interface Pessoa {
  nome: string;
  idade: number;
  // Métodos na interface (opcionais)
  cumprimentar?(): void;
}

// Implementando a interface em uma classe
class Cliente implements Pessoa {
  constructor(public nome: string, public idade: number) {}

  // Implementando o método cumprimentar da interface
  cumprimentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

function main() {
  const cliente1 = new Cliente("João", 30);
  cliente1.cumprimentar();
}

main();
