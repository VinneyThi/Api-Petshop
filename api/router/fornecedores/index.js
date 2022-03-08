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
module.exports = router;