const router = require('express').Router();
const Table = require('./FornecedoresFunctions')

router.use('/',async (request, response)=> {
    const result = await Table.listAll()
    response.send(JSON.stringify(result)
        )
})

module.exports = router;