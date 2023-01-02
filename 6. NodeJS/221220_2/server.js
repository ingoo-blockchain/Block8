const express = require("express")
const app = express()
const router = require("./routes")
const nunjucks = require("nunjucks")
const { login } = require("./middlewares")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(login)

app.use(router)

app.listen(3000, () => {
    console.log("server start")
})
