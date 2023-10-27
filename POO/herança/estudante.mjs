// estudante.js
import Pessoa from './pessoa.mjs'; // Importa a classe Pessoa

class Estudante extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade); // Chama o construtor da classe pai (Pessoa)
    this.curso = curso;
  }

  apresentacao() {
    console.log(`Oi, eu sou ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
  }
}

// Exporta a classe Estudante
export default Estudante;
