const sequelize = require('sequelize');
const connection = require('./config.json');

const database = new sequelize(
    connection.database,
    connection.username,
    connection.password,
    {
        dialect:connection.dialect
    }
)

database.sync({})

module.exports = database