const sequelize = require('sequelize')

const db = new sequelize('gymuser', 'gymmer', 'gympass', {      //database  username password
    host: 'localhost',
    dialect: 'mysql',                                            //which dbms using 
    pool: {
        min: 0,
        max: 5
    }
})

const userdata = db.define('userdata', {              //table name products with following attributes
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: sequelize.STRING,
    age: sequelize.INTEGER,
    gender : sequelize.STRING

})

db.sync()
    .then(() => console.log('database synced successfully'))
    .catch((err) => console.error("error in creating database"))
exports = module.exports = {
    userdata
}