const pool = require("./db")

exports.findOne = async ({ where }) => {
    try {
        const payload = Object.entries(where)
            .map(([key, value]) => `${key}='${value}'`)
            .join(",")

        const sql = `SELECT * FROM user WHERE ${payload} LIMIT 1`
        const [[result]] = await pool.query(sql)
        return result
    } catch (e) {
        throw new Error(e)
    }
}
