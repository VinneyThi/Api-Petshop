const TableFornecedor = require('./FornecedoresFunctions')
const InvalidFields = require('../../erros/InvalidFields')
const NotFound = require('../../erros/NotFound')


function fillterPrivateFields(data){
    let newData = {}
    arryFiledsPublic = ['empresa','id','categoria']
    arryFiledsPublic.forEach(fieldPublic =>{
        newData[fieldPublic] = data[fieldPublic]
    })

    return newData
}
class Fornecedor {
    constructor ({id, empresa, email, categoria, dataCreate, dataUpdate, version }){
        this.id = id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCreate = dataCreate
        this.dataUpdate = dataUpdate
        this.version = version       
    }

    async create(){
        let result = await  TableFornecedor.Insert({
            empresa : this.empresa,
            email : this.email,
            categoria : this.categoria
        })

        this.id = result.id
        this.dataCreate = result.dataCreate
        this.dataUpdate = result.dataUpdate
        this.version = result.version
        result = fillterPrivateFields(result)
        return result
    }

    async load(){
        let result = await TableFornecedor.loadDB(this.id)
        console.log("osi")
        if (!result)
        {   console.log("oi")
            throw new NotFound("Não existe esse fornecedor")
        }

        this.dataCreate = result.dataCreate
        this.dataUpdate = result.dataUpdate
        this.version = result.version
        result = fillterPrivateFields(result)
        return result
    }

    async update(){
        const updatArr = ['empresa','email', 'categoria']
        const dataUpdata = {}
        updatArr.forEach((field) =>{
            const aux = this[field]
            if( typeof aux === 'string' && aux.length > 0){
            dataUpdata[field] = aux
        }
        })

        if (updatArr.lengh === 0){
            throw new InvalidFields("Dados invalidos");}
              
        let result = await TableFornecedor.updateDB(this.id, dataUpdata)
        return FilterPrivateFields(result)
    }

    async delete(){
        const result = await TableFornecedor.delete(this.id)
        return FilterPrivateFields(result) 
    }
}
module.exports = {
                    "Fornecedor": Fornecedor,
                    FilterPrivateFields :fillterPrivateFields                     
                }