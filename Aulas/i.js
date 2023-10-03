// // Orientado a objeto
// const livro = {
//     titulo: "Como Programar 2001",
//     autor: "Anderson",
//     isDisponivel: false,


//     checkin: function () {
//         this.isDisponivel = true;
//     },
//     checkout: function () {
//         this.isDisponivel = false;
//     }
// }
// livro.checkin();
// livro.checkin;

// //criar objeto e depois acrescentar caracteristicas dele.
// let pessoa2 = new Object();
// pessoa2.fulano = "Celso";
// pessoa2.anos = 18;
// console.log(pessoa2.fulano);
// console.log(pessoa2[fulano]);

// let pessoa3 = {
//     "nome": "Diniz";
//     "idade": 23;
// }

// // exércicio

// let pessoa = new Object();
// pessoa.nome = "joão";
// pessoa.idade = 25;
// delete pessoa.idade;
// console.log(pessoa.nome);

// let aluno = {
//     notas: [85, 90, 78]
//   };
//   aluno.notas[1] = 95;
//   delete aluno.notas[2];
//   console.log(aluno.notas);





//enumarates
// suponha que voce desenvolvendo um aplicativo de agendamento de precisa representar os dias da semana. como voce usaria enums para isso e qual seria o beneficio?
// const DiasDaSemana = {
//     SEGUNDA: 'segunda-feira',
//     TERCA: 'terça-feira',
//     QUARTA: 'quarta-feira',
//     QUINTA: 'quinta-feira',
//     SEXTA: 'sexta-feira',
//     SABADO: 'sábado',
//     DOMINGO: 'domingo'
//   };

// const TiposDeInimigo = {
//     ESPADACHIM: 'espadachim',
//     QUEIRO: 'arqueiro',
//     MAGO: 'mago'
//   };
//   function criarInimigo(tipo) {
//     if (tipo === TiposDeInimigo.ESPADACHIM) {
//       return "Inimigo espadachim criado.";
//     } else if (tipo === TiposDeInimigo.ARQUEIRO) {
//       return "Inimigo arqueiro criado.";
//     } else if (tipo === TiposDeInimigo.MAGO) {
//       return "Inimigo mago criado.";
//     } else {
//       return "Tipo de inimigo inválido.";
//     }
//   }
//   console.log(criarInimigo(TiposDeInimigo.ARQUEIRO)); // Saída: Inimigo arqueiro criado.AR
  
// const TiposDeClasse = {
//     ECONOMICA: 'economica',
//     EXECUTIVA: 'executiva',
//     PRIMEIRA_CLASSE: 'primeira classe'
//   };
//   function reservarPassagem(classe) {
//     if (classe === TiposDeClasse.ECONOMICA) {
//       return "Passagem reservada para a classe econômica.";
//     } else if (classe === TiposDeClasse.EXECUTIVA) {
//       return "Passagem reservada para a classe executiva.";
//     } else if (classe === TiposDeClasse.PRIMEIRA_CLASSE) {
//       return "Passagem reservada para a primeira classe.";
//     } else {
//       return "Tipo de classe inválido.";
//     }
//   }
//   console.log(reservarPassagem(TiposDeClasse.EXECUTIVA)); // Saída: Passagem reservada para a classe executiva.
  

