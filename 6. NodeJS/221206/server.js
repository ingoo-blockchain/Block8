const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    console.log(req.query)
    res.send('hello server!!!!')
})

app.listen(3000,()=>{
    console.log('express server!')
})