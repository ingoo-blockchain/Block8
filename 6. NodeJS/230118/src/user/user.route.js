const express = require("express")
const router = express.Router()
const { userController: controller } = require("./user.module")

router.post("/", (req, res, next) => controller.postSignup(req, res, next))

module.exports = router
