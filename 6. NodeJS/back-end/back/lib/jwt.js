class JWT {
    constructor({ crypto, options }) {
        this.crypto = crypto
        this.options = options
    }

    sign(data, options = {}) {
        // TODO 옵션내용...만들기..
        const header = this.encoding({ tpy: 'JWT', alg: 'HS256' })
        const payload = this.encoding(data)
        const signature = this.createSignature([header, payload])
        return [header, payload, signature].join('.')
    }

    getPayload(token) {
        const [, payload] = token.split('.')
        console.log(payload)
        return this.decoding(payload)
    }

    encoding(value) {
        return Buffer.from(JSON.stringify(value)).toString('base64').replace(/[=]/g, '')
    }

    decoding(value) {
        return JSON.parse(Buffer.from(value, 'base64').toString('utf-8'))
    }

    createSignature(tokenArr, salt = 'web7722') {
        const data = tokenArr.join('.')
        return this.crypto.createHmac('sha256', salt).update(data).digest('base64').replace(/[=]/g, '')
    }

    verify(token, salt) {
        const [header, payload, signature] = token.split('.')
        const isValidToken = signature !== this.createSignature([header, payload], salt)
        if (isValidToken) {
            throw new Error('invalid token')
        } else if (false) {
            // 옵션정보 만들고 토큰유효기간 설정
            throw new Error('expires  token')
        }

        return this.decoding(payload)
    }
}

// const crypto = require('crypto')
// const jwt = new JWT({ crypto, options })

// const token = jwt.sign({ userid: 'web7722', name: 'ingoo' })
// const payload = jwt.verify(token)
// console.log(payload)

module.exports = JWT
