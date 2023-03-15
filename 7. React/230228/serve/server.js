const express = require("express")
const app = express()
const path = require("path")

// localhost:3000/bundle.js
app.use(express.static(path.join(__dirname, "..", "dist")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist/index.html"))
})

app.listen(3000, () => {
    console.log(`front server`)
})
