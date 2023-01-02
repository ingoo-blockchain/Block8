// 1단계
// const addUser = async (payload) => {
//         try {
//             const { dataValues } = await User.create(payload)
//             return dataValues
//         } catch (e) {
//             throw new Error(e.message)
//         }
//     },
// module.exports = ({ User }) => ({
//      addUser,
// })

// 2단계
// module.exports = ({ User }) => ({
//     addUser: async (payload) => {
//         try {
//             const { dataValues } = await User.create(payload)
//             return dataValues
//         } catch (e) {
//             throw new Error(e.message)
//         }
//     },
// })

class userRepository {
    constructor({ User }) {
        this.User = User
    }

    async addUser(payload) {
        try {
            const { dataValues } = await this.User.create(payload)
            return dataValues
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUser({ userid, userpw }) {
        try {
            const where = { userid, userpw }
            const data = await this.User.findOne({ attributes: ['id', 'userid'], where })
            if (!data?.dataValues) throw 'can not user'
            return data.dataValues
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUserById({ id }) {
        try {
            const where = { id }
            const data = await this.User.findOne({ where })
            if (!data?.dataValues) throw 'Can not User'
            return data.dataValues
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = userRepository
