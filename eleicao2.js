function simularEleicao() {
    let candidato_X = 0;
    let candidato_Y = 0;
    let candidato_Z = 0;
    let branco = 0;
    let nulo = 0;
  
    while (true) {
      const voto = prompt("Digite o número do candidato (1 para candidato_X, 2 para candidato_Y, 3 para candidato_Z, ou 0 para branco) ou digite 'FIM' para encerrar a votação:");
  
      if (voto === "FIM") {
        break;
      }
  
      const votoNum = parseInt(voto);
  
     if (isNaN(votoNum)) {
        alert("Voto inválido! Por favor, digite apenas o número do candidato ou 'FIM' para encerrar a votação.");
      } else {
        switch (votoNum) {
          case 1:
            candidato_X++;
            break;
          case 2:
            candidato_Y++;
            break;
          case 3:
            candidato_Z++;
            break;
          case 0:
            branco++;
            break;
          default:
            nulo++;
            break;
        }
      }
    }
  
    const votos = [candidato_X, candidato_Y, candidato_Z, branco, nulo];
    const candidatos = ["candidato_X", "candidato_Y", "candidato_Z", "branco", "nulo"];
    let vencedor = "Nenhum";
    let maiorVotos = 0;
  
    for (let i = 0; i < votos.length; i++) {
      if (votos[i] > maiorVotos) {
        maiorVotos = votos[i];
        vencedor = candidatos[i];
      }
    }
  
    console.log("Resultado da eleição:");
    console.log("----------------------------");
    console.log("Total de votos para candidato_X:", candidato_X);
    console.log("Total de votos para candidato_Y:", candidato_Y);
    console.log("Total de votos para candidato_Z:", candidato_Z);
    console.log("Total de votos em branco:", branco);
    console.log("Total de votos nulos:", nulo);
    console.log("----------------------------");
    console.log("Vencedor: ", vencedor);
  }
  
  simularEleicao();
  