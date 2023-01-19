const express = require("express")
const router = express.Router()
const { authController: controller } = require("./auth.module")

router.post("/", (req, res, next) => controller.postLogin(req, res, next))

module.exports = router
