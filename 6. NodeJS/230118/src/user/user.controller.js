class UserController {
    constructor({ userService }) {
        this.userService = userService
    }

    async postSignup(req, res, next) {
        try {
            const { userid, userpw, username } = req.body
            const user = await this.userService.signup({ userid, userpw, username })
            res.status(201).json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController
