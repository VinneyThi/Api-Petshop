const JsonToXml = require('jsontoxml')
class Serialize {
    Json(data){
        return JSON.stringify(data)
    }

    Xml(data){
        return JsonToXml(data)
    }

    Serialize(data){
        if (this.contentType === 'application/json'){
            return this.Json(data)
        }
        else if(this.contentType === 'application/xml'){
            return this.Xml(data)
        }

        throw new Error('Format not supported')
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
    AcceptsTypes : ['application/json','application/xml']
}