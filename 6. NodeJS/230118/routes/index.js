const express = require("express")
const router = express.Router()
const users = require("../src/user/user.route")
const auth = require("../src/auth/auth.route")

router.use("/users", users)
router.use("/auth", auth)

module.exports = router
