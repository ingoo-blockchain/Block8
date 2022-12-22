module.exports = (req, res, next) => {
    if (req.headers.cookie === undefined) return next()
    const { cookie } = req.headers
    req.cookies = cookie
        .split(";")
        .map((v) => v.split("="))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v)
            return acc
        }, {})
    next()
}
