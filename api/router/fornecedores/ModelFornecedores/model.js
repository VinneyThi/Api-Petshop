const Sequelize = require('sequelize')
const DB = require('../../../DB')

const columns = {
    empresa : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : { 
        type : Sequelize.STRING,
        allowNull : false
    },
    categoria : { 
        type : Sequelize.ENUM('ração', 'brinquedos'),
        allowNull : false
    }

}

const options = { 
    freezeTableName : true,
    tableName : "Fornecedores",
    timestamps: true
}


module.exports = DB.define("fornecedores", columns, options)