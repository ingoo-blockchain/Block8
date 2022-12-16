const express = require("express")
const nunjucks = require("nunjucks")
const app = express() // const server = net.createServer()
const PORT = process.env.SERVER_PORT || 3000

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(express.urlencoded({ extended: false })) // content-type: application/x-www-form-urlencoded

app.get("/", (req, res) => {
    // http://localhost:3000?name=ingoo
    const name = req.query.name
    console.log("되냐?~")
    res.render("index.html", { name: name })
})

app.get("/user/join", (req, res) => {
    res.render("user/join.html")
})

app.post("/user/join", (req, res) => {
    console.log(req.body)
    console.log(req.body.userid)
    console.log(req.body.userpw)
    console.log(req.body.username)
    const { userid, userpw, username } = req.body
    console.log(userid)
    console.log(userpw)
    console.log(username)
    res.redirect("/user/welcome")
})

app.get("/user/welcome", (req, res) => {
    res.send("회원가입 성공 ^오^")
})

app.listen(PORT, () => {
    console.log(`server start`)
}) // server.listen()
