const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("./models")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

/*
`id`
`userid`
`content`
`register`
*/

app.get("/comments", (req, res, next) => {
    try {
        res.send("전체게시물 가져오기")
    } catch (e) {
        next(e)
    }
})

app.post("/comments", async (req, res, next) => {
    try {
        const userid = `web7722`
        const { content } = req.body
        if (!userid) throw new Error("userid가 없습니다.")
        if (!content) throw new Error("content 없음!")

        const sql = `INSERT INTO Comment(userid, content) VALUES('${userid}','${content}')`
        const [{ insertId }] = await mysql.query(sql)
        const [[response]] = await mysql.query(`SELECT id, userid, content, DATE_FORMAT(register,'%Y-%m-%d') as register FROM Comment WHERE id=${insertId}`)
        response.updated = false
        res.json(response)
    } catch (e) {
        next(e)
    }
})

app.get("/comments/:id", (req, res, next) => {
    try {
        res.send("하나 게시물 가져오기")
    } catch (e) {
        next(e)
    }
})

app.put("/comments/:id", (req, res, next) => {
    try {
        res.send("게시물 수정하기")
    } catch (e) {
        next(e)
    }
})
app.delete("/comments/:id", (req, res, next) => {
    try {
        res.send("게시물 삭제")
    } catch (e) {
        next(e)
    }
})

app.use((error, req, res, next) => {
    console.log(error.message)
    res.send(`${error}`)
})

app.listen(3000, () => {
    console.log(`server start`)
})
