const Sequelize = require('sequelize');
const config = require("config");

const DB = new Sequelize(
    config.get('mysql.db'),
    config.get('mysql.user'),
    config.get('mysql.password'),
    {
        host: config.get(mysql.host),
        dialect : 'mysql'
    }
);


module.exports = DB;