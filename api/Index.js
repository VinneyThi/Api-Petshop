const express = require('express')
const bodyparse = require('body-parser')
const config = require("config");
const router = require('./router/fornecedores/index.js');
const CatchErros = require('./erros/ErrosManager')
const ValidateData = require('./ValidateData')
const arryAcceptType = require('./Serialize').AcceptsTypes

const validateData = new ValidateData(arryAcceptType)
const api = express()

api.use(bodyparse.json()) 
api.use(validateData.Manager)
api.use('/api/fornecedores', router)
api.use(CatchErros)

api.listen(config.get('api.port'), ()=> console.log("Server on"))