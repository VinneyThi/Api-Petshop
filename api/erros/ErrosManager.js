const InvalidFields = require('./InvalidFields')
const NotFound = require('./NotFound')

function CatchErros(err, request, response, next){
    response.status(err.status)
    response.send(JSON.stringify({msg:err.msg}))
}

module.exports = CatchErros