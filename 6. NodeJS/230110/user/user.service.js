class userService {
    constructor({ userRepository }) {
        this.userRepository = userRepository
    }

    async signup({ userid, userpw, username }) {
        try {
            // 로직
            const user = await this.userRepository.addUser({ userid, userpw, username })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = userService
