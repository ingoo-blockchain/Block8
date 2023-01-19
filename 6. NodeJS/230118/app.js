const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
const router = require("./routes")
// npm install cookie-parser cors
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.use(cookieParser())

app.use(express.json())
app.use(router)
// router..
app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app
