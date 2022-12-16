const express = require("express")
const path = require("path")
const app = express() // app

// GET  /
// GET  /list
// GET  /write
// POST /write

// GET / HTTP/1.1
app.get("/", (req, res) => {
    console.log(req)
    console.log(req.query) // localhost:3000 req.query = {name:ingoo}
    const body = path.join(__dirname, "views", "index.html") // index.html
    console.log(body)
    res.sendFile(body)
})

app.get("/list", (req, res) => {
    const body = path.join(__dirname, "views", "list.html")
    console.log(body)
    res.sendFile(body)
})

app.get("/write", (req, res) => {
    const body = path.join(__dirname, "views", "write.html")
    console.log(body)
    res.sendFile(body)
})

app.post("/write", (req, res) => {
    const body = path.join(__dirname, "views", "index.html")
    console.log(body)
    res.sendFile(body)
})

app.listen(3000, () => {
    console.log(`server start`)
})
