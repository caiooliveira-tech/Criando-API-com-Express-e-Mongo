import express from 'express';
import conectaNaDb from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDb();
// Abaixo está sendo feita a conexão com o MongoDB. O método connect recebe a URL de conexão com o banco de dados. O método retorna uma Promise, que é aguardada com o await.
conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});
// Abaixo está sendo feito um tratamento de erro para o evento de erro da conexão. O método on recebe o nome do evento e uma função de callback que será executada quando o evento ocorrer.
conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

const app = express();
routes(app);

app.get('/livros/:idLivro', (req, res) => {
   const index = buscaLivro(req.params.idLivro);
   res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => { 
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
   
});

app.put('/livros/:idLivro', (req, res) => {
    const index = buscaLivro(req.params.idLivro);
    livros[index].titulo = req.body.titulo;
    res.status(200).send('Livro atualizado com sucesso');
});

app.delete('/livros/:idLivro', (req, res) => {
    const index = buscaLivro(req.params.idLivro);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso');
});

export default app;