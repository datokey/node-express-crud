const sequelize = require('sequelize');
const database = require('../config/db');

const filemModel = database.define( 
    "filem",
    {
        judul:{type:sequelize.STRING},
        deskripsi:{type:sequelize.STRING},
        rating:{type:sequelize.INTEGER},
    }
 );

 module.exports = filemModel














