// router
const express = require("express")
const router = express.Router() // {}

router.get("/list", (req, res) => {
    res.send("gallery/ list 입니다.")
})

router.get("/write", (req, res) => {
    res.send("gallery / write 입니다.")
})

router.get("/view", (req, res) => {
    res.send("gallery /view 입니다.")
})

router.get("/delete", (req, res) => {
    res.send("gallery /delete 입니다.")
})

module.exports = router
