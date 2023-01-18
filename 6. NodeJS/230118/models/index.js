const Sequelize = require("sequelize")
const env = process.env.NODE_NEV || "development"
const config = require("../config")["db"][env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

// sequelize -> models

// models -> 관계형

module.exports = {
    Sequelize,
    sequelize,
}
