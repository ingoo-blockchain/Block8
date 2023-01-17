const config = {
    db: {
        development: {
            username: "ingoo",
            password: "ingoo",
            database: "ingoo3",
            port: "3306",
            host: "127.0.0.1", // host..
            dialect: "mysql",
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
