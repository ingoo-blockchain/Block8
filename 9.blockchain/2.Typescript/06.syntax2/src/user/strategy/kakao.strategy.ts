import { UserParams } from "../interfaces/login.request.interface"
import { AuthenticationResponse, Authenticator } from "./Authenticator.interface"

export class KakaoAuthenticator implements Authenticator {
    async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("kakao login?")
        return { success: true }
    }
}
