const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views',{
    express:app,
})

app.use(express.static('public'))
app.use(express.json())

app.get('/',(req,res,next)=>{
    res.render('index.html')
})

app.use((error,req,res,next)=>{
    res.send('error')
})

app.listen(3005, ()=>{
    console.log(`server start`)
})