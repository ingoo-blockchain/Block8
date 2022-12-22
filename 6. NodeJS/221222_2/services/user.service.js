const userRepository = require("../repository/user.repository")

exports.getUser = async ({ user_id }) => {
    const where = { user_id }
    const user = await userRepository.findOne({ where })
    return user
}

// this.login({ user_id: "web7722", user_pw: "1234" }).then((data) => console.log(data))
