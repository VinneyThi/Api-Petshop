class ValidateData{
    constructor(arryDataValidated){
        this.arryDataValidated = [...arryDataValidated]
        console.log(arryDataValidated)
    }

    Manager(request,response,next){
        let contentType = request.header('Accept')
        if (contentType === '*/*'){
            contentType = 'application/json'
        }
        else if (!IsValidated(contentType)){ 
            response.status(406)
            response.end()        
            return   
        }
        response.setHeader('Content-Type', contentType)
        next()
    }

    IsValidated(requestType){
        if( this.arryDataValidated.indexOf(requestType) === -1){
            throw new InvalideFormat(`${requestType}`)
        }
        return true;
    }

}

module.exports = ValidateData