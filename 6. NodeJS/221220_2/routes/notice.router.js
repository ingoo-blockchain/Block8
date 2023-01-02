// router
const express = require("express")
const router = express.Router() // {}

router.get("/list", (req, res) => {
    res.send("notice/ list 입니다.")
})

router.get("/write", (req, res) => {
    res.send("notice / write 입니다.")
})

router.get("/view", (req, res) => {
    res.send("notice /view 입니다.")
})

router.get("/delete", (req, res) => {
    res.send("notice /delete 입니다.")
})

module.exports = router
