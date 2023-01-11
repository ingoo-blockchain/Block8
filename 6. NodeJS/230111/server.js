const express = require("express")
const config = require("./config")
const { sequelize } = require("./models")
const app = express()
const PORT = config.port

app.use(express.json())

app.use((error, req, res, next) => {
    res.send("ERROR")
})

app.listen(PORT, async () => {
    await sequelize.sync({ force: true })
    console.log(sequelize.models) // User, Comment
    const Comment = sequelize.models.Comment
    // C
    // INSERT INTO Comment (userid, content) VALUES ('web7722', 'hello hello world~~');
    const insert = await Comment.create({ userid: "web7722", content: "hello hello world~~" })
    console.log(insert)

    // R
    // SELECT * FROM Comment // 만약 where 절 이있다면. SELECT * FROM Comment WHERE userid='web7722'
    const selectAll = await Comment.findAll()

    // SELECT * FROM Comment WHERE userid='web7722' LIMIT 1
    const selectOne = await Comment.findOne({ where: { userid: "web7722" } }) // null

    console.log(selectAll)
    console.log(selectOne)

    const insert2 = await Comment.create({ userid: "web7722", content: "hello hello11111" })
    const insert3 = await Comment.create({ userid: "web7722", content: "hello hello22222" })
    const insert4 = await Comment.create({ userid: "web7722", content: "hello hello33333" })

    // UPDATE Comment SET userid='web8855', content:'수정이다' where id=3
    // 1. 바꿀내용들, 2. where
    const update = await Comment.update(
        { userid: "web8855", content: "수정이다." },
        {
            where: { id: 3 },
        }
    )

    console.log(update)

    // DELETE FROM Comment WHERE id=3 and userid='web7722'
    const destory = await Comment.destroy({ where: { id: 3 } })
    console.log(destory)

    const [query] = await sequelize.query("SELECT * FROM Comment")
    console.log(query)

    console.log(`server start`)
})
