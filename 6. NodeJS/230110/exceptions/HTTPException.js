class HttpException extends Error {
    constructor(message) {
        super(message)
        this.status = 500
    }
}

module.exports = HttpException
