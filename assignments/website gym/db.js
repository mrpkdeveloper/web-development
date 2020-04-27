const Sequelize = require('sequelize')

const db = new Sequelize('gymuser', 'gymmer', 'gympass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
})
//this is name of table
const userdata = db.define('userdata', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,

    age: Sequelize.NUMBER

})

//these lines ensure that tables are created in your database
db.sync()
    .then(() => console.log('database synced successfully'))
    .catch((err) => console.error("error in creating database"))

exports = module.exports = {
    userdata
}

