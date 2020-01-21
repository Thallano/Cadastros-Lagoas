//Importando Nodes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('routes');
//const { setupWebsocket } = require('./websocket');

//Importando Nodes
const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://Thallano:thallano@cluster0-shard-00-00-0cuni.mongodb.net:27017,cluster0-shard-00-01-0cuni.mongodb.net:27017,cluster0-shard-00-02-0cuni.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


//Mêtodos HTTP: Get, POST, PUT DELETE

//Tipos de parametro

//Query Params: req.query (filtros, ordenação, paginação,..)
//Route Params: 
//Body Params

//mon(Não-Relacional)
//Pegar informacao do cliente e responder rotas e parametros

//Escutando na porta 3333

server.listen(3333);