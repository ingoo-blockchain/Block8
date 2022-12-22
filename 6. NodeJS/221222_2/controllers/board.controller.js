const service = require("../services/board.service")

exports.list = async (req, res) => {
    const list = await service.getList()
    res.render("board/list.html", { list })
}
