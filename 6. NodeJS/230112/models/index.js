const config = require("../config")["db"]
const Sequelize = require("sequelize")

const sequelize = new Sequelize(config.database, config.username, config.password, config)

require("./user.model")(sequelize, Sequelize)
require("./board.model")(sequelize, Sequelize)

const { models } = sequelize

for (const key in models) {
    if (typeof models[key].associate !== "function") continue
    models[key].associate(models)
}

;(async () => {
    await sequelize.sync({ force: true })

    const {
        models: { User, Board },
    } = sequelize

    await User.create({ userid: "web7722", userpw: "1234", username: "ingoo" })
    await User.create({ userid: "admin", userpw: "1234", username: "관리자" })

    await Board.create({ subject: "게시글1", content: "내요옹", userid: "web7722" })
    await Board.create({ subject: "게시글2", content: "내요옹", userid: "web7722" })
    await Board.create({ subject: "게시글3", content: "내요옹", userid: "web7722" })
    await Board.create({ subject: "게시글4", content: "내요옹", userid: "web7722" })
    await Board.create({ subject: "게시글5", content: "내요옹", userid: "admin" })
    await Board.create({ subject: "게시글6", content: "내요옹", userid: "admin" })

    const board = await Board.findAll({
        raw: true,
        nest: true,
        include: [{ model: User }],
    })
    console.log(board)
})()

module.exports = {
    Sequelize,
    sequelize,
}
