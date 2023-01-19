const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const cookieParser = require("cookie-parser")
const axios = require("axios")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(3005, () => {
    console.log(`front server start `)
})
