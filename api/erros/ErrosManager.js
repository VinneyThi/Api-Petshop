const InvalidFields = require('./InvalidFields')
const NotFound = require('./NotFound')

function CatchErros(err, request, response, next){
    console.log('trataErr')

    if (err instanceof Error){
        response.status(406)
        response.send(JSON.stringify({msg:err.message}))
      return 
    }
    response.status(err.status)
    response.send(JSON.stringify({msg:err.msg}))
}

module.exports = CatchErros