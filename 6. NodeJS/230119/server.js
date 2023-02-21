const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const cookieParser = require("cookie-parser")
const axios = require("axios")

const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    withCredentials: true,
})

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.use((req, res, next) => {
    try {
        const { token } = req.cookies
        const [header, payload, signature] = token.split(".")

        const pl = JSON.parse(Buffer.from(payload, "base64").toString("utf-8"))
        req.user = pl
    } catch (e) {
    } finally {
        next()
    }
})

app.get("/", (req, res) => {
    if (req.user === undefined) return res.render("index.html")
    const { userid, username } = req.user

    res.render("index.html", {
        userid,
        username,
    })
})

app.get("/signup", (req, res) => {
    res.render("user/signup.html")
})

app.post("/signup", async (req, res) => {
    console.log(req.body)
    // POST 127.0.0.1:3000/users
    const response = await request.post("/users", {
        ...req.body,
    })
    const { userid, username, userpw } = response.data

    res.redirect(`/welcome?userid=${userid}&username=${username}&userpw=${userpw}`)
})

app.get("/welcome", (req, res) => {
    const { userid, userpw, username } = req.query
    res.render("user/welcome.html", {
        userid,
        userpw,
        username,
    })
})

const HOST = `https://kauth.kakao.com`
const REST_API_KEY = `36025f5d8c9f567106956ae12f1bccc6`
const REDIRECT_URI = `http://localhost:3000/oauth/kakao`
const CLIENT_SECRET = `LwMxTyksQfbgCCG2f5QXxTa9xjdNTle8`

app.get("/kakao/login", (req, res) => {
    // kauth.kakao.com
    //  /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
    const redirectURI = `${HOST}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    res.redirect(redirectURI)
})

app.get("/signin", (req, res) => {
    res.render("user/signin.html")
})

app.listen(3005, () => {
    console.log(`front server start `)
})
