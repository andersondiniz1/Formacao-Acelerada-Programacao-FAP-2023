// Dados de exemplo para eventos
const eventos = [
    {
      nome: "Workshop de Desenvolvimento Web",
      data: "2023-10-15",
      hora: "14:00",
      local: "Local A",
      descricao: "Um workshop sobre desenvolvimento web.",
      palestrantes: ["João Silva", "Maria Santos"],
      participantes: [],
    },
    // Adicione mais eventos aqui
  ];
  
  // Função para exibir a lista de eventos
  function exibirEventos() {
    eventos.forEach((evento, index) => {
      console.log(`[${index + 1}] ${evento.nome} - Data: ${evento.data}, Hora: ${evento.hora}, Local: ${evento.local}`);
    });
  }
  
  // Função para inscrever um participante em um evento
  function inscreverParticipante(eventoIndex, nome, email, telefone) {
    const evento = eventos[eventoIndex];
    if (evento) {
      evento.participantes.push({ nome, email, telefone });
      console.log(`${nome} foi inscrito no evento ${evento.nome}`);
    } else {
      console.log("Evento não encontrado.");
    }
  }
  
  // Exemplo de uso
  console.log("Bem-vindo à Plataforma de Registro da Softex\n");
  
  exibirEventos();
  
  const eventoEscolhido = 1; // Você pode permitir que o usuário escolha um evento
  const nomeParticipante = "Exemplo Participante";
  const emailParticipante = "exemplo@email.com";
  const telefoneParticipante = "123-456-7890";
  
  inscreverParticipante(eventoEscolhido - 1, nomeParticipante, emailParticipante, telefoneParticipante);
  