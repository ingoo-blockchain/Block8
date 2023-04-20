import { UserParams } from "../interfaces/login.request.interface"
import { AuthenticationResponse, Authenticator } from "./Authenticator.interface"

interface IStrategy {
    [key: string]: Authenticator
}

class Strategy {
    private strategy: IStrategy = {}
    constructor() {}

    public set(key: string, authenticate: Authenticator) {
        this.strategy[key] = authenticate
    }

    public async login(type: string, credentials: UserParams): Promise<AuthenticationResponse> {
        const result = await this.strategy[type].authenticate(credentials)
        return result
    }
}

export default Strategy
