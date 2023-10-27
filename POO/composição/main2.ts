/* 
  Neste exemplo, criaremos uma representação de uma escola com várias salas de aula. A existência da escola está diretamente ligada à existência das salas de aula.
  
  As salas de aula são criadas quando a escola é instanciada, e elas são parte essencial da escola. A existência da escola está diretamente ligada às salas de aula, o que é um exemplo de composição.
*/
export class SalaDeAula {
  constructor(public numero: number) {}
}

export class Escola {
  private salasDeAula: SalaDeAula[]; // Composição: a Escola é composta por SalasDeAula

  constructor() {
    this.salasDeAula = [
      new SalaDeAula(101),
      new SalaDeAula(102),
      new SalaDeAula(103),
    ];
  }

  listarSalasDeAula() {
    console.log("Salas de Aula ne Escola");

    for (const sala of this.salasDeAula) {
      console.log(`Sala ${sala.numero} `);
    }
  }
}

function main() {
  const minhaEscola = new Escola();
  minhaEscola.listarSalasDeAula();
}

main();
