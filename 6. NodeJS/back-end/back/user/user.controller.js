class userController {
    constructor({ userService }) {
        this.userService = userService
    }

    async signup(req, res, next) {
        try {
            const { userid, userpw, username } = req.body
            const response = await this.userService.signup({ userid, userpw, username })
            res.status(201).json(response)
        } catch (e) {
            next(e)
        }
    }

    async getToken(req, res, next) {
        try {
            const { userid, userpw } = req.body
            const token = await this.userService.login({ userid, userpw })
            res.status(200).json({ token })
        } catch (e) {
            next(e)
        }
    }

    async getProfile(req, res, next) {
        try {
            if (!req.headers?.authorization) throw new Error('err')
            const [, token] = req.headers['authorization'].split(' ')
            const response = await this.userService.getUserByToken(token)
            res.json(response)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = userController
