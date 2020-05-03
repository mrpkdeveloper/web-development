const sequelize = require('sequelize')
const db = new sequelize('userdb', 'userdb', 'userdbpass', {
    dialect: 'mysql',
    host: 'localhost'
})

const user = db.define('user', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    firstname: sequelize.STRING,
    lastname: sequelize.STRING

})
db.sync()
    .then(() => console.log('database synced successfully'))
    .catch((err) => console.error("error in creating database"))

exports = module.exports = {
    db, user
}