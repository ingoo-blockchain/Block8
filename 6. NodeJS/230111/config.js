require("dotenv").config()

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    db: {
        development: {
            username: process.env.DB_USER || "",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_DATABASE || "",
            port: process.env.DB_PORT || "",
            host: process.env.DB_HOST || "",
            dialect: "mysql",
        },
    },
}

module.exports = config
