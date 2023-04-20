import { UserParams } from "../interfaces/login.request.interface"
import { AuthenticationResponse } from "../strategy/Authenticator.interface"
import Strategy from "../strategy/Strategy"

class UserService {
    constructor(private readonly strategy: Strategy) {}

    async login(type: string, credentials: UserParams): Promise<AuthenticationResponse> {
        const result = await this.strategy.login(type, credentials)
        return result
    }
}

export default UserService
