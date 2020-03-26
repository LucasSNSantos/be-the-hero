const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json()) // Isso aqui permite que app entenda JSON 
app.use(routes); //o App usa as rotas
app.listen(3333);




/*
    Rota/Recurso
 */

/**
 * Metodos HTTP
 * GET: buscar/listar uma infomacao do backend
 * POST: Criar uma informacao no backend
 * PUT: Alterar uma informacao no backend
 */

 /**
  * Tipos de Parametros
  * 
  * Query Params: Parametros nomeados, enviados na rota apos o simbolo de interrogacao e servem
  * para: Filtros, paginacao, buscas
  * 
  * Route Params: Parametros usados para indentificar recursos, como por exemplo: tabelas de
  * um banco de dados
  * 
  * Request Body: o Corpo da requisicao, usado para criar ou alterar recursos
  */

/**
 * Querys em Bancos de Dados usando Javascript
 * Query Builder: table('users').select('*).where()
 */



