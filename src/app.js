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


export default app;