const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.use(express.static("public"))
app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get("/", (req, res, next) => {
    res.render("index.html")
})

app.listen("3005", () => {
    console.log(`server start`)
})
