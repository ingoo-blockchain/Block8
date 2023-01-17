const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("./models")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

/*
    `id`
    `userid`
    `content`
    `register`
    */

app.get("/comments", async (req, res, next) => {
    try {
        // [{id,userid,content,register,updated}]
        const [response] = await mysql.query(`SELECT id, userid, content, DATE_FORMAT(register,'%Y-%m-%d') as register FROM Comment`)
        const result = response.map((v) => {
            return {
                ...v,
                updated: false,
            }
        })

        res.json(result)
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
        // response.updated = false
        res.json({
            ...response,
            updated: false,
        })
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

app.put("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const { content } = req.body
        const [{ affectedRows }] = await mysql.query(`UPDATE Comment SET content='${content}' WHERE id=${id}`)
        console.log(affectedRows)
        if (0 >= affectedRows) throw new Error("수정이 진행되지 않음")
        res.send({ affectedRows })
    } catch (e) {
        next(e)
    }
})
app.delete("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const [{ affectedRows }] = await mysql.query(`DELETE FROM Comment WHERE id=${id}`)
        if (0 >= affectedRows) throw new Error("삭제가 진행되지 않음.")
        res.json({ affectedRows })
    } catch (e) {
        next(e)
    }
})

app.use((error, req, res, next) => {
    console.log(error.message)
    res.status(500).send(`${error}`)
})

app.listen(3000, () => {
    console.log(`server start`)
})
