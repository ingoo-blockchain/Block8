const express = require("express")
const router = express.Router()
const { controller } = require("./comment.module")

router.get("/", (req, res, next) => controller.getList(req, res, next))

module.exports = router
