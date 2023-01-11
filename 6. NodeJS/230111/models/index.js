const Sequelize = require("sequelize") // Sequelize Class { DataTypes }
const config = require("../config")
const db = config.db[config.env]

const sequelize = new Sequelize(db.database, db.username, db.password, db)

// user.model.js
require("./user.model.js")(sequelize, Sequelize)
require("./comment.model.js")(sequelize, Sequelize)

module.exports = {
    sequelize,
    Sequelize,
}
