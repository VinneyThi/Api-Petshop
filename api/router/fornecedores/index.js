const router = require('express').Router();
const Table = require('./FornecedoresFunctions')
const Fornecedor = require('./Fornecedor')

router.get('/',async (request, response)=> {
    const result = await Table.listAll()
    response.send(JSON.stringify(result)
        )
})


router.post('/', async (request, response)=> {
    const dataBody = request.body
    const fornecedor  = new Fornecedor(dataBody)

    response.send(await fornecedor.create())
})


router.get('/:id', async (request, response)=> {
    try {        
        const id = request.params.id
        const fornecedor  = new Fornecedor({id : id})
        response.send(await fornecedor.load())
    } catch (error) {
        response.send( JSON.stringify({msg: error.message}))    
    }
})

module.exports = router;