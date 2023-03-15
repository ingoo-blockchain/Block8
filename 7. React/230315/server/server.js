const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin:true,
    credentials:true
}))
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.method, req.path, req.body)
    next()
})

app.get('/categories', (req,res)=>{
    res.json([
        {path:'/', name:'Home'},
        {path:'/counter', name:'counter'}
    ])
})  


app.listen(3005, ()=>{
    console.log(`server start`)
})