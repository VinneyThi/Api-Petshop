class NotFound  extends Error{
    constructor(){
        super('Not Found')
        this.id = 1
        this.name = 'NotFound'
        this.status = 400
    }
}

module.exports = NotFound