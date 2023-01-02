const express = require("express")
const router = express.Router()
const user = require("./user.route")

router.get("/", (req, res) => {
    const { token } = req.cookies
    res.render("index.html", { token })
})

router.use("/user", user)

module.exports = router
