// pessoa.js
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Exporta a classe Pessoa
  export default Pessoa;
  