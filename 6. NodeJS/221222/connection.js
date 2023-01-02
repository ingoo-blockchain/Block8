const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "ingoo",
    password: "ingoo",
    database: "ingoo",
})

connection.connect((err) => {
    if (err) throw err
    console.log(`socket open...`)
})
