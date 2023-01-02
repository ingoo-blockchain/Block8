const mysql = require("mysql2")

const pool = mysql
    .createPool({
        host: "127.0.0.1",
        port: "3306",
        user: "ingoo",
        password: "ingoo",
        database: "ingoo",
        connectionLimit: 5,
    })
    .promise()

;(async () => {
    const [result, field] = await pool.query(`SELECT * FROM board`)
    console.log(result)
})()
