const express = require("express")
const router = express.Router()

router.get("/list", (req, res) => {
    res.send("qna list.")
})

module.exports = router
