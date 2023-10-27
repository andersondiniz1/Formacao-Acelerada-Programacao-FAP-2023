/* 
  Neste exemplo, o objeto "Carro" é composto por várias "Rodas". A existência das rodas está diretamente ligada à existência do carro.
  
  As rodas são criadas quando o carro é instanciado, e elas são uma parte essencial do carro. A existência do carro está diretamente ligada às rodas, o que é um exemplo de composição.
*/
export class Roda {
  constructor(public tamanho: number) {}
}

export class Carro {
  private rodas: Roda[]; // Composição: o Carro é composto por Rodas

  constructor() {
    this.rodas = [new Roda(1), new Roda(2), new Roda(3), new Roda(4)];
  }

  verificarEstadoDasRodas() {
    for (const roda of this.rodas) {
      console.log(`Roda ${roda.tamanho} está em boas condições.`);
    }
  }
}

function main() {
  const meuCarro = new Carro();
  meuCarro.verificarEstadoDasRodas();
}

main();
