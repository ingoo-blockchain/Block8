const express = require("express")
const app = express()
const router = require("./routes")

app.use(express.json())
app.use(router)
// router..
app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app
