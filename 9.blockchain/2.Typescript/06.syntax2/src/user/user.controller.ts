import { UserParams } from "./interfaces/login.request.interface"
import UserService from "./service/user.service"

class UserController {
    constructor(private readonly userService: UserService) {}

    // localhost:3000/login/:type
    signin() {
        // req.body
        const loginParmas: UserParams = {
            email: "web7722",
            password: "1234",
        }

        this.userService.login("google", loginParmas)
    }
    signup() {}
}

export default UserController
