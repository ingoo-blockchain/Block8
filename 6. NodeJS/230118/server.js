const app = require("./app")
const { sequelize } = require("./models")
const port = process.env.PORT || 3000

app.listen(port, async () => {
    await sequelize.sync({ force: false })
    console.log(`Database Connected...`)
    console.log(`Running on http://localhost:${port}`)
})
