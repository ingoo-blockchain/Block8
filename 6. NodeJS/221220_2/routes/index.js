const express = require("express")
const router = express.Router()
const board = require("./board.route")
const gallery = require("./gallery.rotue")
const notice = require("./notice.router")
const qna = require("./qna.router")

router.use("/board", board)
router.use("/gallery", gallery)
router.use("/notice", notice)
router.use("/qna", qna)

module.exports = router
