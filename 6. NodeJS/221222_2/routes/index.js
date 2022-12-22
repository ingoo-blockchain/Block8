const express = require("express")
const router = express.Router()
const board = require("./board.route")
const user = require("./user.route")

router.get("/", (req, res) => {
    const { AccessToken } = req.cookies
    res.render("index.html", { AccessToken })
})
router.use("/board", board)
router.use("/user", user)

module.exports = router
