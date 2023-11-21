// Abra o terminal e crie um novo diretório para o seu projeto:
// mkdir meu-servidor-typescript
// cd meu-servidor-typescript

// Inicie um novo projeto Node.js:
// npm init -y

// Instale o TypeScript e o ts-node como uma dependências de desenvolvimento:
// npm install -D typescript ts-node

// Instale também a dependência @types/node: 
// npm install @types/node

// Instale o Express como dependências de desenvolvimento do seu projeto:
// npm install -D express

// Não esquecer de instalar a dependência @types/express, para que possamos trabalhar com requisições e respostas: 
// npm install @types/express

// Abrir o VCcode
// code .

// Sair do servidor
// cd ..

// Crie um arquivo chamado app.js e abra-o no seu editor de código.

// No terminal, certifique-se de estar no diretório do seu projeto.
// Instale o pacote body-parser para facilitar o manuseio de dados do corpo das requisições:
// npm install body-parser

// instalar ts-node
// npm install -g ts-node

import express, { Request, Response } from "express";
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const livros = [
    { id: 1, titulo: "Aprendendo TypeScript", autor: "John Doe" },
    { id: 2, titulo: "Node.js para Iniciantes", autor: "Jane Smith" },
];
  

app.get("/livros", (req: Request, res: Response) => {
  res.send(livros);
});

const porta: number = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
