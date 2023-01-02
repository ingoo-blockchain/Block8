module.exports = () => {
    return (req, res, next) => {
        if (req.headers.cookie === undefined) return next()

        const cookies = req.headers.cookie
            .split(";")
            .map((v) => v.split("="))
            .reduce((acc, [k, v]) => {
                acc[k.trim()] = v
                return acc
            }, {})

        req.cookies = cookies
        next()
    }
}
