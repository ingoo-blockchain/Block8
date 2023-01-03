const express = require("express")
const cors = require("cors")
const app = express()

// npm install cors

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
//     res.setHeader("Access-Control-Allow-Headers", "Content-type")
//     next()
// })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const user = [
    {
        idx: 1,
        userid: "web7722",
        userpw: "1234",
        username: "ingoo",
        gender: "남자",
    },
]

// GET /board/list
// POST /board/write
// GET /board/view
// POST /board/modify
// POST /board/delete

// path분에 동사가들어가면 안된다.

// GET /boards
// GET /boards/1
// POST /boards
// PUT /boards
// DELETE /boards

// list
app.get("/users", (req, res) => {
    res.json(user)
})

// writre
app.post("/users", (req, res) => {
    const { userid, userpw, username, gender } = req.body
    const response = { idx: user[user.length - 1].idx + 1, userid, userpw, username, gender }
    user.push(response)
    res.json(response)
})

// view
app.get("/users/:idx", (req, res) => {
    const { idx } = req.params
    const [response] = user.filter((v) => v.idx === parseInt(idx))
    res.json(response)
})

app.listen(3000, () => {
    console.log(`server start`)
})
