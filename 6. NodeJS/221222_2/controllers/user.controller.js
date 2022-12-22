const userService = require("../services/user.service")

exports.getLogin = (req, res, next) => {
    res.render("user/login.html")
}

exports.postLogin = async (req, res, next) => {
    const { user_id, user_pw } = req.body
    const user = await userService.getUser({ user_id, user_pw })

    if (user === undefined) return next(new Error("아이디가 중복되었습니다."))

    res.setHeader("Set-Cookie", `AccessToken=${user_id}; Max-Age=2592000 Domain=127.0.0.1; Path=/; Secure; HttpOnly`)
    res.redirect("/")
}

exports.logout = (req, res, next) => {
    res.setHeader("Set-Cookie", `AccessToken=; Max-Age=0 Domain=127.0.0.1; Path=/; Secure; HttpOnly`)
    res.redirect("/")
}
