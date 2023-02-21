const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
const qs = require("qs")
const router = require("./routes")
const axios = require("axios")
// npm install cookie-parser cors
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.use(cookieParser())

app.use(express.json())
app.use(router)

const HOST = `https://kauth.kakao.com`
const REST_API_KEY = `36025f5d8c9f567106956ae12f1bccc6`
const REDIRECT_URI = `http://localhost:3000/oauth/kakao`
const CLIENT_SECRET = `LwMxTyksQfbgCCG2f5QXxTa9xjdNTle8`

// controller
// router
app.get("/oauth/kakao", async (req, res, next) => {
    //step2. 토큰 받기
    const { code } = req.query

    const host = `${HOST}/oauth/token`
    const headers = {
        "Content-type": `application/x-www-form-urlencoded`,
    }

    const body = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
        client_secret: CLIENT_SECRET,
    })

    const response = await axios.post(host, body, headers)
    console.log(response.data) // token

    //step3. 회원정보 가져오기
    try {
        const { access_token } = response.data
        const host = `https://kapi.kakao.com/v2/user/me`
        const user = await axios.post(host, null, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${access_token}`,
            },
        })

        console.log(user)
    } catch (e) {}

    // fornt 서버 보냄
    res.redirect("http://localhost:3005")
})

// router..
app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app
