const crypto = require("crypto")

class JWT {
    constructor({ crypto }) {
        this.crypto = crypto
    }

    sign(data, options = {}) {
        const header = this.encode({ tpy: "JWT", alg: "HS256" }) //base64url
        const payload = this.encode({ ...data, ...options }) //base64url
        const signature = this.createSignature([header, payload])

        // return `${header}.${payload}.${signature}`
        return [header, payload, signature].join(".")
    }

    // token:string
    verify(token, salt) {
        const [header, payload, signature] = token.split(".")
        const newSignature = this.createSignature([header, payload], salt)
        if (newSignature !== signature) {
            throw new Error("토큰이 이상함...누가 변조함!")
        }

        return this.decode(payload)
    }

    encode(obj) {
        return Buffer.from(JSON.stringify(obj)).toString("base64").replace(/[=]/g, "")
    }

    decode(base64) {
        return JSON.parse(Buffer.from(base64, "base64").toString("utf-8"))
    }

    createSignature(base64urls, salt = "web7722") {
        // header.payload .join
        const data = base64urls.join(".")
        return this.crypto.createHmac("sha256", salt).update(data).digest("base64").replace(/[=]/g, "")
    }
}

const jwt = new JWT({ crypto })

const token = jwt.sign({ userid: "web7722", username: "ingoo" }) // JWT
console.log(token)
// eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJ3ZWI3NzIyIiwidXNlcm5hbWUiOiJpbmdvbyJ9.uMiI+vrtl0X/u2hg64YZGCOvvlogEYBOwradyX6duyU

const payload = jwt.verify("eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJ3ZWI3NzIyIiwidXNlcm5hbWUiOiJpbmdvbyJ9.uMiI+vrtl0X/u2hg64YZGCOvvlogEYBOwradyX6duyU", "web7722")
console.log(payload)
