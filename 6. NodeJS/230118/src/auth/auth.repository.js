class AuthRepository {
    constructor({ User }) {
        this.User = User
    }

    async getUserByInfo({ userid, userpw }) {
        try {
            const user = await this.User.findOne({
                raw: true,
                where: {
                    userid,
                    userpw,
                },
            })
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
}
