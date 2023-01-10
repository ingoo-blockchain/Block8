class userController {
    constructor({ userService }) {
        this.userService = userService
    }

    async postSignup(req, res, next) {
        try {
            const { userid, userpw, username } = req.body
            const response = await this.userService.signup({ userid, userpw, username })
            res.status(201).json(response)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = userController
