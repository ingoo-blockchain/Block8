import { EmailAuthenticator, KakaoAuthenticator, Login, LoginServcie } from "./Authentication"

interface AuthProps {
    email: string
    password: string
}

interface IEmailSender {
    sendEmail(email: string): void
}

class EmailSender implements IEmailSender {
    sendEmail(email: string): void {}
}

class Auth {
    constructor(private readonly authProps: AuthProps, private readonly emailSender: EmailSender, private readonly loginService: LoginServcie) {}

    public async login() {
        // 4가지방법론

        await this.loginService.login("kakao", this.authProps)
    }

    public register(): void {
        this.emailSender.sendEmail(this.authProps.email)
    }
}

const authProps: AuthProps = { email: "web7722@gmail", password: "1234" }
const emailSender = new EmailSender()

const local = new EmailAuthenticator()
const kakao = new KakaoAuthenticator()

export interface Strategy {
    local: EmailAuthenticator
    kakao: KakaoAuthenticator
}

const strategy: Strategy = {
    local,
    kakao,
}

const loginService = new Login(strategy)
const auth = new Auth(authProps, emailSender, loginService)
auth.login()
