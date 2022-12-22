const pool = require("./db")

exports.findAll = async () => {
    const [result] = await pool.query(`SELECT * FROM board order by idx desc;`) // [[],[]]
    return result
}

exports.findOne = async (idx) => {
    sql = `SELECT * FROM board where idx=${idx}`
}

// CR

// R

// view
