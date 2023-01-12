const config = {
    db: {
        username: "ingoo",
        password: "ingoo",
        host: "127.0.0.1",
        port: "3306",
        database: "sample",
        dialect: "mysql",
        define: {
            freezeTableName: true,
            timestamps: false,
        },
    },
}

module.exports = config
