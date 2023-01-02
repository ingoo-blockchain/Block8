const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")

router.get("/login", controller.getLogin)
router.post("/login", controller.postLogin)
router.get("/logout", controller.logout)


module.exports = router
