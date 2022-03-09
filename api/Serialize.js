class Serialize {
    Json(data){
        return JSON.stringify(data)
    }

    Serialize(data){
        if (this.contentType === 'application/json'){
            return this.Json(data)
        }

        throw new Error('não suportado')
    }
}


class SerializeFornecedores extends Serialize{
    constructor(contentType){
        super()
        this.contentType = contentType
    }
}

module.exports = {
    Serialize : Serialize,
    SerializeFornecedores : SerializeFornecedores,
    AcceptsTypes : ['application/json']
}