const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

let counter = 5
app.get('/counters', (req,res) => {
    res.json({count:counter})
})

app.post('/counters/increment', (req,res)=>{
    res.json({count:++counter})
})

app.post('/counters/decremenet', (req,res)=>{
    res.json({count:--counter})
})

app.listen(3005, () => {
    console.log(`server start`)
})