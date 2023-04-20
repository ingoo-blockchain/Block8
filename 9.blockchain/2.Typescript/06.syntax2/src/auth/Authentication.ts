// 카카오, 이메일, 네이버, 구글
// interface

import { Strategy } from "./auth"

interface AuthProps {
    email: string
    password: string
}

interface AuthenticationResponse {
    success: boolean
    message?: string
}

interface Authenticator {
    authenticate(credentials: AuthProps): Promise<AuthenticationResponse>
}

export class EmailAuthenticator implements Authenticator {
    async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
        // 로직부분
        console.log("local 로그인?")
        return { success: true }
    }
}

export class KakaoAuthenticator implements Authenticator {
    async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("kakao login?")
        return { success: true }
    }
}

export interface LoginServcie {
    login(type: string, credentials: AuthProps): Promise<AuthenticationResponse>
}

export class Login implements LoginServcie {
    constructor(private readonly strategy: Strategy) {}

    async login(type: "local" | "kakao", credentials: AuthProps): Promise<AuthenticationResponse> {
        const result = await this.strategy[type].authenticate(credentials)
        return result
    }
}

// const loginService = new Login()

// const userInfo: AuthProps = {
//     email: "web7722@gmail.com",
//     password: "1234",
// }

// loginService.login(local, userInfo)
