const config = require("../config")
const Sequelize = require("sequelize")

const env = config.env // development
const db = config.db[env]

const sequelize = new Sequelize(db.database, db.username, db.password, db) // model

// const user = require("./user.model") // function
// user(sequelize, Sequelize)

const user = require("./user.model")(sequelize, Sequelize)
console.log(user)

console.log(sequelize.models.User === user)

module.exports = {
    Sequelize,
    sequelize,
}
