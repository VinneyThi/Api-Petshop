const TableFornecedor = require('./FornecedoresFunctions')
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
        const result = await  TableFornecedor.Insert({
            empresa : this.empresa,
            email : this.email,
            categoria : this.categoria
        })

        this.id = result.id
        this.dataCreate = result.dataCreate
        this.dataUpdate = result.dataUpdate
        this.version = result.version

        return JSON.stringify(result)
    }

    async load(){
        const result = await TableFornecedor.loadDB(this.id)
        
        if (!result)
        {
            throw new Error("Não existe esse fornecedor")
            return;
        }

        this.dataCreate = result.dataCreate
        this.dataUpdate = result.dataUpdate
        this.version = result.version
        
        return JSON.stringify(result);
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
            throw new Error("Dados invalidos");}
      
        return await TableFornecedor.updateDB(this.id, dataUpdata)
    }

    async delete(){
        return await TableFornecedor.delete(this.id)
    }
}
module.exports = Fornecedor