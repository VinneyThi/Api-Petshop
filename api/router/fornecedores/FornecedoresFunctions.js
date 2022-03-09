const ModelFornecedor = require('./ModelFornecedores/model.js')

module.exports = {
    listAll(){ return ModelFornecedor.findAll()},
    Insert(fornecedor){ return ModelFornecedor.create(fornecedor)},
    loadDB(id){ return ModelFornecedor.findOne({where : {
                    "id" : id
                }
        }
    )},
    updateDB(id,dataUpdate){
        return ModelFornecedor.update(dataUpdate, {where:{id:id}})
    }
}