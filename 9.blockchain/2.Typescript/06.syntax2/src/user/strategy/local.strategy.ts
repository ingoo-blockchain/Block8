import { UserParams } from "../interfaces/login.request.interface"
import { AuthenticationResponse, Authenticator } from "./Authenticator.interface"

export class EmailAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 로직부분
        console.log("local 로그인?")
        return { success: true }
    }
}
