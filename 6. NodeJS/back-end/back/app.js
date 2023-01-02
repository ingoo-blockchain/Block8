const express = require('express')
const error = require('./middlewares/errorHandler')
const router = require('./routes/index')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)
app.use(error)

module.exports = app
