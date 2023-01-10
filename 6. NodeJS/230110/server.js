const express = require("express")
const config = require("./config")
const HttpException = config.exception.HttpException
const app = express()
const { sequelize } = require("./models")

const router = require("./routes")

app.use(router)
app.use((error, req, res, next) => {
    console.error(error)
    if (error instanceof HttpException) {
        res.json({
            isError: true,
            message: error.message,
            status: error.status,
        })
    } else if (error instanceof Error) {
        res.json({
            isError: true,
            message: error.message,
        })
    }
})

app.listen(config.port, async () => {
    await sequelize.sync({ force: true })
    console.log(`server start ${config.port}`)
})
