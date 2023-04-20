import { UserParams } from "../interfaces/login.request.interface"
import { AuthenticationResponse, Authenticator } from "./Authenticator.interface"

export class GoogleAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("google login?")
        return { success: true }
    }
}
