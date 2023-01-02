const express = require("express")
const nunjucks = require("nunjucks")
const cookieParser = require("./middlewares/cookieParser")
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(cookieParser())

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/createCookie", (req, res) => {
    res.setHeader("name", "ingoo") // name 속성에 ingoo값을 넣어서 응답을 보내주겟다.
    res.setHeader("Set-Cookie", "token=web722; Domain=localhost; Path=/; Secure; HttpOnly")
    res.send("응답")
})

app.get("/profile", (req, res) => {
    console.log(req.cookies)
    res.send("프로필~")
})

app.listen(3000, () => {
    console.log(`server start`)
})
