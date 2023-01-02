const CryptoJS = require('crypto-js')

class userService {
    constructor({ userRepository, SHA256, jwt }) {
        this.userRepository = userRepository
        this.SHA256 = SHA256
        this.jwt = jwt
    }

    async signup({ userid, userpw, username }) {
        try {
            const password = this.SHA256(userpw).toString() // SHA256
            const user = await this.userRepository.addUser({ userid, userpw: password, username })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async login({ userid, userpw }) {
        try {
            const password = this.SHA256(userpw).toString()
            const user = await this.userRepository.getUser({ userid, userpw: password })
            const token = this.jwt.sign(user)

            return token
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUserByToken(token) {
        try {
            const { id } = this.jwt.verify(token, 'web7722')
            const user = await this.userRepository.getUserById({ id })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = userService
