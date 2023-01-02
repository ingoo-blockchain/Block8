const express = require("express")
const nunjucks = require("nunjucks")
const app = express()

const list = [{ name: "테스트", content: "테스트", subject: "테스트" }] // 로컬스토리지

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    const { name } = req.query
    res.render("index.html", { name })
})

app.get("/list", (req, res) => {
    res.render("list.html", { list })
})

app.get("/write", (req, res) => {
    res.render("write.html")
})

app.post("/write", (req, res) => {
    const { subject, content, name } = req.body
    list.push({ subject, content, name })
    res.redirect(`/view?index=${list.length - 1}`)
})

app.get("/view", (req, res) => {
    const { index } = req.query
    console.log(list[index])
    res.render("view.html", { name: list[index].name, content: list[index].content, subject: list[index].subject })
})

app.listen(3000, () => {
    console.log(`server start`)
})
