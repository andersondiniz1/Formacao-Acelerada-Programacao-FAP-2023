// Saudação Pernozalizada: https://ideal-fortnight-rw4gjwr95g53wjx7-3002.app.github.dev/saudacao/nomeQdeseja
// Usuarios: https://ideal-fortnight-rw4gjwr95g53wjx7-3002.app.github.dev/usuarios
// Usuarios 1: https://ideal-fortnight-rw4gjwr95g53wjx7-3002.app.github.dev/usuarios/1
// Usuarios 2: https://ideal-fortnight-rw4gjwr95g53wjx7-3002.app.github.dev/usuarios/2

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 3002;

// Simulação de uma lista de usuários (pode ser substituída por um banco de dados)
const usuarios = [
    { id: 1, nome: 'Isaac' },
    { id: 2, nome: 'Egito' },
];

// Adicionando o middleware BodyParser para processar dados do corpo da solicitação
app.use(bodyParser.json());

// Rota para a raiz ("/")
app.get('/', (req, res) => {
    res.send('Bem-vindo à página inicial do meu web service!');
});

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
        novoUsuario.id = usuarios.length + 1;
        usuarios.push(novoUsuario);

        res.status(201).json({ mensagem: 'Usuário adicionado com sucesso', usuario: novoUsuario });
    } else {
        res.status(400).json({ mensagem: 'Dados inválidos para adicionar usuário' });
    }
});


// Rota para saudação personalizada
app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome;
    res.json({ mensagem: `Olá, ${nome}! Bem-vindo ao meu web service!` });
});

// Rota para lidar com o erro 404
app.use((req, res) => {
    res.status(404).json({ mensagem: 'Erro 404 - Página não encontrada' });
});

// Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    console.log(`Para listar todos os usuários: http://localhost:${porta}/usuarios`);
    console.log(`Para obter detalhes de um usuário: http://localhost:${porta}/usuarios/{ID}`);
    console.log(`Para adicionar um novo usuário: http://localhost:${porta}/usuarios (método POST)`);
    console.log(`Para uma saudação personalizada: http://localhost:${porta}/saudacao/{SeuNome}`);
});