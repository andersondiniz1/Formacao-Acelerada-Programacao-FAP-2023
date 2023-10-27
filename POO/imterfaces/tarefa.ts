interface Tarefa {
  titulo: string;
  descricao: string;
  dataConclusao: Date;
}

class TarefaTrabalho implements Tarefa {
  constructor(
    public titulo: string,
    public descricao: string,
    public dataConclusao: Date,
    public prioridade: string
  ) {}

  // Métodos específicos para tarefas de trabalho
  definirPrioridade(prioridade: string) {
    this.prioridade = prioridade;
  }
}

class TarefaPessoal implements Tarefa {
  constructor(
    public titulo: string,
    public descricao: string,
    public dataConclusao: Date,
    public categoria: string
  ) {}

  // Métodos específicos para tarefas pessoais
  definirCategoria(categoria: string) {
    this.categoria = categoria;
  }
}

class TarefaEstudo implements Tarefa {
  constructor(
    public titulo: string,
    public descricao: string,
    public dataConclusao: Date,
    public materia: string
  ) {}

  // Métodos específicos para tarefas de estudo
  definirMateria(materia: string) {
    this.materia = materia;
  }
}

function main() {
  const tarefa1 = new TarefaTrabalho(
    "Relatório Mensal",
    "Preparar relatório de vendas",
    new Date(),
    "Alta"
  );
  const tarefa2 = new TarefaPessoal(
    "Compras de Supermercado",
    "Comprar mantimentos",
    new Date(),
    "Compras"
  );
  const tarefa3 = new TarefaEstudo(
    "Estudar Matemática",
    "Preparação para o exame",
    new Date(),
    "Álgebra Linear"
  );

  console.log(tarefa1);
  console.log(tarefa2);
  console.log(tarefa3);
}

main();
