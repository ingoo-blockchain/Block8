const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get("/", (req, res) => {
    res.render("index.html",{ list, })
})

app.get("/ajax", (req, res) => {
    console.log("GET /AJAX 요청 옴!")

    const userid = req.query.userid
    let flag = true
    if (userid === undefined) {
        flag = false
    }
    console.log(req.query.userid, flag)
    // User userid 받아오고 true false
    res.status(200).send(`${flag}`)
})

app.post("/ajax", (req, res) => {
    console.log(`POST /ajax 실행됨`)
    const userid = req.body.userid
    let flag = true
    if (userid === undefined) {
        flag = false
    }
    res.send(`${flag}`)
})

app.listen(3000, () => {
    console.log(`server start`)
})
