class UserService {
    constructor({ userRepository, jwt }) {
        this.userRepository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    async signup({ userid, userpw, username }) {
        try {
            if (!userid || !userpw || !username) throw "내용이 없음!"
            const hash = this.crypto.createHmac("sha256", "web7722").update(userpw).digest("hex")
            const user = await this.userRepository.addUser({ userid, username, userpw: hash })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async me(token) {
        try {
            const { userid } = this.jwt.verify(token, "web7722")
            const user = await this.userRepository.getUserById(userid)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserService
