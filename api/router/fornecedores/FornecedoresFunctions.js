const ModelFornecedor = require('./ModelFornecedores/model.js')

module.exports = {
    listAll(){ return ModelFornecedor.findAll()},
    Insert(fornecedor){ return ModelFornecedor.create(fornecedor)}
}