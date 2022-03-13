const TableFornecedores = require('../router/fornecedores/ModelFornecedores/model.js')

TableFornecedores
    .sync()
    .then((result) => {
        console.log("Create table Fornecedores")
        
    }).catch((err) => {
        console.log(err)
    });