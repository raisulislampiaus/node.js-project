const Sequelize = require('sequelize');


const CONNECTION_STRING = process.env.DATABASE || "postgres://postgres:piaus550660@localhost:5432/pppp-22";

const db = new Sequelize(CONNECTION_STRING);


const User = db.define('user',{
    name:Sequelize.TEXT,
    email:Sequelize.TEXT,
    password:Sequelize.TEXT
});


const Direc = db.define('direc',{
    destination:Sequelize.TEXT,
    hash:Sequelize.TEXT
});


module.exports ={
    db,User,Direc
}