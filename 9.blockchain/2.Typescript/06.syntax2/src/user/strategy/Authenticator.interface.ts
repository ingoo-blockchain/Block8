import { UserParams } from "../interfaces/login.request.interface"

export interface AuthenticationResponse {
    success: boolean
    message?: string
}

export interface Authenticator {
    authenticate(credentials: UserParams): Promise<AuthenticationResponse>
}
