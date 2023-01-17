const crypto = require("crypto")

const header = {
    alg: "HS256",
    typ: "JWT",
}

const payload = {
    sub: "1234567890",
    userid: "admin",
    username: "admin",
    age: 32,
    iat: 1516239022,
}

function encode(obj) {
    return Buffer.from(JSON.stringify(obj)).toString("base64")
}

const header64 = encode(header)
const payload64 = encode(payload)

console.log(header64, payload64)

const 평문 = header64 + "." + payload64
console.log(평문)

const signature = crypto.createHmac("sha256", "web7722").update(평문).digest("base64")

console.log(signature)
