class UserRepository {
    constructor({ User }) {
        this.User = User
    }

    async addUser(payload) {
        try {
            const user = await this.User.create(payload, { raw: true })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserRepository
