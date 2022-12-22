const board = require("../repository/board.repository")

exports.getList = async () => {
    const result = await board.findAll() // [{},{},{}]
    return result
}
