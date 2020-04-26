const sequelize = require('sequelize')

const db = new sequelize('gymuser','gymmer','gympass',{
    host:'localhost',
    dialect:'mysql'
})
            //this is name of table
const user = db.define('user',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement : true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allownull:false
    },
    age:{
        type:sequelize.NUMBER,
        allownull:false
    },
    gender:{
        type:sequelize.STRING,
        allownull:false
    },
    phone:{
        type:sequelize.NUMBER,
        allownull:false
    },
    mail:{
        type:sequelize.STRING,
        allownull:false
    },

})

exports = module.exports={
    user
}