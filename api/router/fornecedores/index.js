const router = require('express').Router();
const Table = require('./FornecedoresFunctions')
const Fornecedor = require('./Fornecedor');


router.get('/',async (request, response)=> {
    const result = await Table.listAll()
    response.status(200)
    response.send(JSON.stringify(result)
        )
})


router.post('/', async (request, response)=> {
    const dataBody = request.body
    const fornecedor  = new Fornecedor(dataBody)
    response.status(201)
    response.send(await fornecedor.create())
})


router.get('/:id', async (request, response, next)=> {
    try {        
        const id = request.params.id
        const fornecedor  = new Fornecedor({id : id})
        response.status(200)
        response.send(await fornecedor.load())
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (request, response)=> {
    try {        
        const id = request.params.id
        const dataBody = request.body
        const mergeObj = Object.assign({}, dataBody, {id: id})
        console.log(mergeObj)
        const fornecedor  = new Fornecedor(mergeObj)
        await fornecedor.update()
        response.status(204)
        response.end()
    } catch (error) {
        next(error)    }
})


router.delete('/:id', async (request, response)=>{
    try {
        const id = request.params.id
        const fornecedor = new Fornecedor({id : id})
        fornecedor.load()
        fornecedor.delete()
        response.status(204)
        response.end()
        
    } catch (error) {
        next(error)    }
})

module.exports = router;