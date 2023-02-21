const config = {
    db: {
        development: {
            database: "loginserver",
            username: "ingoo",
            password: "ingoo",
            host: "127.0.0.1",
            port: "3306",
            dialect: "mysql",
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
        test: {
            database: "loginserver_test",
            username: "ingoo",
            password: "ingoo",
            host: "127.0.0.1",
            port: "3306",
            dialect: "mysql",
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
