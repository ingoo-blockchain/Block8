// router
const express = require("express")
const router = express.Router() // {}
const contoller = require("../controllers/board.controller")

router.get("/list", contoller.list)
router.get("/write", contoller.write)
router.get("/view", contoller.view)
router.get("/delete", contoller.delete)

module.exports = router
