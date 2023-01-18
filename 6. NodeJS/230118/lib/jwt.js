class JWT {
    constructor({ crypto }) {
        this.crypto = crypto
    }

    encode(obj) {
        return Buffer.from(JSON.stringify(obj)).toString("base64").replace(/[=]/g, "")
    }
}

module.exports = JWT
