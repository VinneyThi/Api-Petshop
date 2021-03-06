const ModelFornecedor = require('./ModelFornecedores/model.js')

module.exports = {
    listAll(){ return ModelFornecedor.findAll({raw: true})},
    Insert(fornecedor){ return ModelFornecedor.create(fornecedor)},
    loadDB(id){ return ModelFornecedor.findOne({where : {
                    "id" : id
                }
        }
    )},
    updateDB(id,dataUpdate){
        return ModelFornecedor.update(dataUpdate, {where:{id:id}})
    },
    delete(id){
        return ModelFornecedor.destroy({
            where : {id : id}
        })

    }
}