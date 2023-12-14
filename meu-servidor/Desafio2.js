const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 3000;

// Adicionando o middleware BodyParser para processar dados do corpo da solicitação
app.use(bodyParser.json());

// Lista de usuários fictícia (pode ser substituída por um banco de dados)
const usuarios = [
    { id: 1, nome: 'Usuário 1' },
    { id: 2, nome: 'Usuário 2' },
];

// Rota para listar todos os usuários
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Rota para obter detalhes de um usuário por ID
app.get('/usuarios/:id', (req, res) => {
    const usuarioId = parseInt(req.params.id, 10);
    const usuario = usuarios.find((user) => user.id === usuarioId);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
});

// Rota para adicionar um novo usuário
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;

    if (novoUsuario && novoUsuario.nome) {
        // Simulação de um ID único (pode ser substituído por um mecanismo mais robusto)
        novoUsuario.id = usuarios.length + 1;
        usuarios.push(novoUsuario);

        res.status(201).json({ mensagem: 'Usuário adicionado com sucesso', usuario: novoUsuario });
    } else {
        res.status(400).json({ mensagem: 'Dados inválidos para adicionar usuário' });
    }
});

// Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}...`);
});

