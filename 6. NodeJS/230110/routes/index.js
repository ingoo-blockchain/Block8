const express = require("express")
const router = express.Router()
const commentRouter = require("../comment/comment.route")

router.use("/comments", commentRouter)

module.exports = router
