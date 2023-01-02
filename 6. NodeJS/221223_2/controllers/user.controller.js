const userService = require("../services/user.service")

exports.getLogin = (req, res, next) => {
    res.render("user/login.html")
}

exports.postLogin = async (req, res, next) => {
    const { user_id, user_pw } = req.body
    const user = await userService.getUser({ user_id, user_pw })

    if (user === undefined) return next(new Error("아이디와 패스워드가 잃치하지 않습니다."))

    res.setHeader("Set-Cookie", `token=${user.user_id}; path=/;`)
    res.redirect("/")
}

exports.logout = (req, res, next) => {
    res.setHeader("Set-Cookie", `token=; path=/;`)
    res.redirect("/")
}
