const express = require("express")
const mysql = require("./models")
const cors = require("cors")
const app = express()

app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

app.use(express.json())

app.get("/comments", async (req, res, next) => {
    try {
        const [response] = await mysql.query(`SELECT id, userid, content, DATE_FORMAT(register,'%Y-%m-%d') as register FROM Comment`)
        res.json(response)
    } catch (e) {
        next(e)
    }
})

app.post("/comments", async (req, res, next) => {
    try {
        const userid = "web7722"
        const { content } = req.body

        if (!content) throw new Error("Content 없음!")

        const sql = `INSERT INTO Comment(userid, content) VALUES('${userid}','${content}')`
        const [{ insertId }] = await mysql.query(sql)
        const [[response]] = await mysql.query(`SELECT id,userid, content, DATE_FORMAT(register,'%Y-%m-%d') as register FROM Comment where id=${insertId}`)

        res.json(response)
    } catch (e) {
        next(e)
    }
})

app.get("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const [[response]] = await mysql.query(`SELECT id,userid,content,DATE_FORMAT(register, '%Y-%m-%d') as register FROM Comment WHERE id=${id}`)
        res.json(response)
    } catch (e) {
        next(e)
    }
})

app.put("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const { content } = req.body // web7722

        const [{ changedRows }] = await mysql.query(`UPDATE Comment SET content='${content}' WHERE id='${id}'`)
        if (changedRows <= 0) throw new Error("수정된 데이터가 없습니다. id를 확인해주세요.")

        res.json({ result: changedRows })
    } catch (e) {
        next(e)
    }
})

app.delete("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const [{ affectedRows }] = await mysql.query(`DELETE FROM Comment WHERE id=${id}`)

        if (affectedRows <= 0) throw new Error("삭제된 데이터가 없습니다. id를 확인해주세요.")
        res.json({ result: affectedRows })
    } catch (e) {
        next(e)
    }
})

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
    })
})

app.listen(3000, () => {
    console.log(`server start`)
})
