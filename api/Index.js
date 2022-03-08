const express = require('express')
const bodyparse = require('body-parser')
const config = require("config");
const router = require('./router/fornecedores/index.js');
const api = express()

api.use(bodyparse.json()) 
api.use('/api/fornecedores', router);

api.listen(config.get('api.port'), ()=> console.log("Server on"))