const JWT = require("./jwt")
const crypto = require("crypto")

describe("lib/JWT.js", () => {
    let jwt
    it("constructor", () => {
        expect(typeof JWT).toBe("function") // class
        jwt = new JWT({ crypto }) // {crypto: {....}}
        expect(typeof jwt.crypto).toBe("object")
    })

    it("encode", () => {
        expect(typeof jwt.encode).toBe("function")
        const value = { foo: "bar" }
        const base64 = jwt.encode(value)
        expect(base64).toBe("eyJmb28iOiJiYXIifQ")
    })
})
