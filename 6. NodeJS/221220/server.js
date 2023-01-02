const express = require("express")
const app = express()
const nunjucks = require("nunjucks")



const items = [
    {
        subject: "첫번째 게시물",
        content: "content",
        name: "name...",
    },
]

app.use(express.urlencoded({ extended: false }))

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/list", (req, res) => {
    res.render("board/list.html", { items })
})

app.get("/write", (req, res) => {
    res.render("board/write.html")
})

app.post("/write", (req, res) => {
    const { content, subject, name } = req.body
    items.push({ content, subject, name })
    res.redirect(`/view?index=${items.length - 1}`)
})

app.get("/view", (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }

    res.render("board/view.html", { item })
})

app.get("/modify", (req, res) => {
    const { index } = req.query
    const item = {
        ...items[index],
        index,
    }

    res.render("board/modify.html", { item })
})

app.post("/modify", (req, res) => {
    const { index, subject, content, name } = req.body
    items[index].subject = subject
    items[index].content = content
    items[index].name = name

    // const {index, ...rest} = req.body // {subject:'', cont두t:'', }
    // items[index] = rest

    res.redirect(`/view?index=${index}`)
})

app.get("/delete", (req, res) => {
    const { index } = req.query
    items.splice(index, 1)
    res.redirect("/list")
})

app.listen(3000, () => {
    console.log(`server start`)
})
