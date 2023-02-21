class AuthController {
    constructor({ authService }) {
        this.authService = authService
    }

    async postLogin(req, res, next) {
        try {
            const { userid, userpw } = req.body
            const token = await this.authService.token({ userid, userpw })
            // res.cookie("token", token, { httpOnly: true, sameSite: "None", secure: true })
            res.json({ token })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = AuthController
