const app = require('./app')
const { sequelize } = require('./models')
const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, async () => {
    await sequelize.sync({ force: false })
    console.log(`Running on http://localhost:${PORT}`)
})
