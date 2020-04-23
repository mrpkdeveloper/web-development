const sequelize = require('sequelize')

const db = new sequelize('shopdb', 'shopper', 'shoppass', {      //database  username password
    host: 'localhost',
    dialect: 'mysql',                                            //which dbms using 
    pool: {
        min: 0,
        max: 5
    }
})


//now we create a class in sequeal or table in sql
const users = db.define('users', {              //table name user with following attributes
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },

})



const products = db.define('products', {              //table name products with following attributes
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: sequelize.STRING,
    manufacturer: sequelize.STRING,
    price: {
        type: sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0.0

    }

})

db.sync()
.then(()=>console.log('database synced successfully'))
.catch((err)=>console.error("error in creating database"))
exports = module.exports = {
    users, products
}