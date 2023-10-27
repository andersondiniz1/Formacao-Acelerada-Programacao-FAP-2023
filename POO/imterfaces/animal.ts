interface Animal {
  nome: string;
  idade: number;

  emitirSom(): void;
  mover(): void;
}

class Leao implements Animal {
  constructor(public nome: string, public idade: number) {}

  emitirSom() {
    console.log("O leão ruge alto.");
  }

  mover() {
    console.log("O leão se move em suas quatro patas.");
  }
}

class Elefante implements Animal {
  constructor(public nome: string, public idade: number) {}

  emitirSom() {
    console.log("O elefante faz trombetas sonoras.");
  }

  mover() {
    console.log("O elefante se move com suas patas pesadas.");
  }
}

function main() {
  const leao: Animal = new Leao("Simba", 5);
  const elefante: Animal = new Elefante("Dumbo", 10);

  leao.emitirSom();
  leao.mover();

  elefante.emitirSom();
  elefante.mover();
}

main();
