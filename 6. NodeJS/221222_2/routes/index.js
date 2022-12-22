const express = require("express")
const router = express.Router()
const board = require("./board.route")

router.use("/board", board)

module.exports = router
