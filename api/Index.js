const express = require('express')
const bodyparse = require('body-parser')
const config = require("config");

const api = express()

api.use(bodyparse.json()) 
api.listen(config.get('api.port'), ()=> console.log("Server on"))