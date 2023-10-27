// main.js
import Estudante from './estudante.mjs'; // Importa a classe Estudante

// Criando uma instância de Estudante
const estudante1 = new Estudante("Alice", 20, "Engenharia");

// Chamando métodos das classes
estudante1.saudacao(); // Método da classe Pessoa
estudante1.apresentacao(); // Método da classe Estudante


// IML - Informal Modeling Language
// +-----------------------+
// |      Pessoa           |
// +-----------------------+
// | nome: String          |
// | idade: Number         |
// +-----------------------+
// | saudacao()            |
// +-----------------------+

//       ^
//       |
//       | Herança
//       |
      
// +-----------------------+
// |     Estudante         |
// +-----------------------+
// | curso: String         |
// +-----------------------+
// | apresentacao()        |
// +-----------------------+

//////////////////////////////////////////////////////////////////////////////

// UML - Unified Modeling Language
// +-----------------------+
// |      Pessoa           |
// +-----------------------+
// | - nome: String        |
// | - idade: Number       |
// +-----------------------+
// | + saudacao(): void    |
// +-----------------------+
//       ^
//       |
//       | Herança
//       |
// +-----------------------+
// |     Estudante         |
// +-----------------------+
// | - curso: String       |
// +-----------------------+
// | + apresentacao(): void|
// +-----------------------+
