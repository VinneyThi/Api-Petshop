class InvalidFields extends Error{
    constructor(msg){
        super(msg)
        this.status = 400
        this.name   = InvalidFields
        this.id     = 0
    }
}

module.exports = InvalidFields