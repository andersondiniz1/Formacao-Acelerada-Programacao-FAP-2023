// async function obterDadosDaAPI() {
//   return new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve("Dados da API");
//     }, 1000);
//   });
// }

// async function principal() {
//   try {
//     console.log("Início da operação assíncrona");
//     const dados = await obterDadosDaAPI();
//     console.log("Dados obtidos:", dados);
//     console.log("Fim da operação assíncrona");
//   } catch (erro) {
//     console.error("Erro:", erro);
//   }
// }

// principal();

async function obterDadosDaAPI() {
  let lista: any = [];
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados: any = await resposta.json();
    //console.log('Dados obtidos:', dados);
    for (const usuario of dados) {
      let id = usuario.id;
      let name = usuario.name;
      let email = usuario.email;
      console.log(id, " - ", name, " - ", email);
    }
  } catch (erro) {
    console.error('Erro ao obter dados da API:', erro);
  }
}

obterDadosDaAPI();