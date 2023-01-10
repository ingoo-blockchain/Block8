class userRepository {
    constructor({ User }) {
        this.User = User
    }

    async addUser(payload) {
        try {
            const user = await this.User.create(payload)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUserByUserId({ userid }) {
        // select * from User where userid= ${userid}
        // select * from user // where userid='web7722'
        const user = await this.User.findOne({
            where: {
                userid: userid,
            },
        })

        return user.dataValues
    }
}

module.exports = userRepository
