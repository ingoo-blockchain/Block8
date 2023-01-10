const {
    sequelize: {
        models: { User },
    },
} = require("../models")
const userRepository = require("./user.repository")

const repository = new userRepository({ User })

repository.addUser({ userid: "asdfasdf", userpw: "qweqweqw", username: "qweqwe" })

repository.getUserByUserId({ userid: "asdfasdf" }).then((data) => {
    console.log(data)
})
