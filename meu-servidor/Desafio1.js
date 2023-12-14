// Abra o terminal e crie um novo diretório para o seu projeto:
// mkdir meu-servidor
// cd meu-servidor

// Inicie um novo projeto Node.js:
// npm init -y

// Instale o Express como dependência do seu projeto:
// npm install express

// Abrir o VCcode
// code .

// Sair do servidor
// cd ..

// Crie um arquivo chamado app.js e abra-o no seu editor de código.

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu web service!');
});

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
