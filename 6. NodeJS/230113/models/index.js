// 1. Connection
const fs = require("fs")
const path = require("path")

const Sequelize = require("sequelize")
const { db } = require("../config")
const env = process.env.NODE_ENV || "development"
const config = db[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs.readdirSync(__dirname)
    .filter((v) => v.indexOf("model") !== -1)
    .forEach((filename) => {
        require(path.join(__dirname, filename))(sequelize, Sequelize)
    })

const { models } = sequelize
for (const key in models) {
    if (typeof models[key].associate === undefined) continue
    models[key].associate(models)
}

;(async () => {
    await sequelize.sync({ force: true })

    const { User, Board, Comment, Hash } = models

    await User.create({ userid: "web7722", userpw: "1234", username: "ingoo" })
    await User.create({ userid: "admin", userpw: "1234", username: "관리자" })

    await Board.create({ subject: "제목1", content: "내용1", userid: "web7722" })
    await Board.create({ subject: "제목2", content: "내용2", userid: "web7722" })
    await Board.create({ subject: "제목3", content: "내용3", userid: "web7722" })
    await Board.create({ subject: "제목4", content: "내용4", userid: "web7722" })
    await Board.create({ subject: "제목5", content: "내용5", userid: "admin" })
    await Board.create({ subject: "제목6", content: "내용6", userid: "admin" })

    await Comment.create({ content: "댓글1", boardid: 1, userid: "web7722" })
    await Comment.create({ content: "댓글2", boardid: 1, userid: "web7722" })
    await Comment.create({ content: "댓글3", boardid: 1, userid: "admin" })
    await Comment.create({ content: "댓글4", boardid: 1, userid: "admin" })

    // write
    // subject, content, hashtag body
    // userid header

    const body = {
        subject: "새로운 글등록",
        content: "하이하이",
        hashtag: ["#javascript", "#helloworld", "#nodejs"],
    }

    const cookies = {
        userid: "web7722",
    }

    const req = { body, cookies }

    // board, hash 구별
    // const { subject, content, hahstag} = req.body
    const { hashtag, ...rest } = req.body

    // 1. Board 테이블 Insert
    const board = await Board.create(rest) // record
    const hashtags = hashtag.map((tag) => Hash.findOrCreate({ where: { tag } }))
    const tags = await Promise.all(hashtags) // [] -> []
    await board.addHashes(tags.map((v) => v[0]))

    // view
    // GET /board/1
    const id = 7

    const view = await Board.findOne({
        // raw: true,
        // nest: true,
        where: { id: id },
        include: {
            model: User,
            attributes: ["username"],
        },
    })

    // getHashes
    const comments = await view.getComments({ raw: true })
    // const hashs = (await view.getHashes({ raw: true })).map((v) => ({ tag: v.tag }))
    const hashs = (await view.getHashes({ raw: true })).map((v) => v.tag)
    // const hashs = (await view.getHashes({ raw: true })).map((v) => console.log(v))

    console.log(comments)
    console.log(hashs)

    
})()

module.exports = {
    Sequelize,
    sequelize,
}
