const crypto = require("crypto")

const str = "Hello world"

const buf = Buffer.from(str)
console.log(buf)
console.log(buf.toString("hex")) // 16
console.log(buf.toString("base64")) // 64
// 1 byte = 8 bit

// 3byte
// 24bit / 6bit 나머지...

// 4byte
// 32bit / 6bit 나머지.

const header = {
    alg: "HS256",
    typ: "JWT",
}

const headerString = JSON.stringify(header)
console.log(headerString)

const buf2 = Buffer.from(headerString).toString("base64")

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

const json = Buffer.from("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", "base64").toString("utf-8")

console.log(buf2)

//
const salt = process.env.SALT || "web7722"
const hash = crypto.createHmac("sha256", salt).update(buf2).digest("base64") // 16
console.log(hash)
console.log(hash.length)
