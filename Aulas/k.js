// const aluno = {};
//     aluno.nome = "Paulo";
//         aluno.saudacao = function () {
//             let sobrenome = "Costa"
//             console.log("Ola " + this.nome + " " + this.sobrenome)
//             };
// console.log(aluno);
// aluno.saudacao();

// const pessoa = {
//     nome: "Anderson"
// };
// console.log(pessoa.nome); // Anderosn
// let aluno = pessoa;
// aluno.nome = "João";
// console.log(pessoa.nome); // João

// function pessoa() {
//     this.nome = "Anderson"
// };
// const pessoa1 = new pessoa();
// pessoa1.idade = 25;

// function pessoa (nome_pessoa, idade_pessoa, genero_pessoa) {
//     this.nome = nome_pessoa,
//     this.idade = idade_pessoa,
//     this.genero = genero_pessoa,
//     this.saudacao = function () {
//         return("Oi " + this.nome);
//     }
// };
// const pessoa1 = new pessoa("Pedro", 23, "Masculino");
// const pessoa2 = new pessoa("João", 27, "Masculino");
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

// const aluno = {
//     nome: "Pedro",
//     get getNome() {
//         return this.nome;
//     },
// };
// console.log(aluno.nome);
// console.log(aluno.getnome);
// console.log(aluno.getNome());

// const aluno = {
//     nome: "Pedro",
//     set setNome(novo_nome) {
//         this.nome = novo_nome;
//     },
// };
// aluno.setNome = "Maria";
// console.log(aluno.nome);

///////////////////////// CLASSES /////////////////////////

// class pessoa {
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
//     saudacao(texto) {
//         console.log(`Olá! ${texto}`)
//     }
// }
// const p1 = new pessoa("Anderson", 22);
// console.log(p1)
// p1.saudacao("Ana");

///////////////////////// HOISTING /////////////////////////

// console.log(soma(3, 5))
// function soma(n1, n2) {
//     return n1 + n2;
// }

///////////////////////// HERANÇAS /////////////////////////

// class pessoa() {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }
// class aluno extends pessoa {
//     constructor(nome) {
//         super(nome);
//         this.idade = idade;
//     }
//     saudacao(){
//         console.log("Olá Aluno!")
//     }
// }
//     saudacao(nome){
//         console.log("Olá Aluno!")
// }
// }
// let aluno1 = new aluno("Anderson", 26);
// let aluno2 = new aluno("Paulo", 30)
// let listaAlunos = [];
// listaAlunos.push(aluno1);
// listaAlunos.push(aluno2);
// aluno1.saudacao();
// aluno1.saudacao("Anderson");
// aluno1.saudacao();