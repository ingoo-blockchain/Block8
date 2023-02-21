class AuthService {
    constructor({ authRepository, jwt }) {
        this.authRepository = authRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    // hash
    // repository user 가 존재하는지.
    // return token
    async token({ userid, userpw }) {
        try {
            if (!userid || !userpw) throw "내용이없더라~"
            const hash = this.crypto.createHmac("sha256", "web7722").update(userpw).digest("hex")
            const user = await this.authRepository.getUserByInfo({ userid, userpw: hash })
            // user 존재하는지. 안하는지
            // 존재하면. token 생성.
            if (!user) throw "아이디와 패스워드가 일치하지 않습니다."

            const token = this.jwt.sign(user)
            return token
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = AuthService
