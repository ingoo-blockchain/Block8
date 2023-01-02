const db = require("./db")

exports.findOne = async ({ where }) => {
    try {
        const payload = Object.entries(where)
            .map(([key, value]) => `${key}='${value}'`)
            .join(" and ")

        const sql = `SELECT * FROM user WHERE ${payload}`
        const [[result]] = await db.query(sql)
        return result // {} or undefiend
    } catch (e) {
        throw new Error(e)
    }
}

// const obj = {
//     where: {
//         user_id: "web7722",
//         user_pw: "123",
//     },
// }

// this.findOne(obj)
