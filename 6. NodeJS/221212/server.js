const net = require('net')
const resFn = require('./lib/res')
const reqFn = require('./lib/req')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || '127.0.0.1'

const server = net.createServer((client)=>{
    client.setEncoding('utf8')

    client.on('data', (chunk)=>{
        const res = resFn(client) // Object { send, sendFile }
        const req = reqFn(chunk)
        
        if(req.method==='GET' && req.path === '/'){
            res.send('<h1>응답~~~</h1>')                          
        } else if (req.method ==='GET' && req.path === '/list') { 
            res.sendFile('list.html')
        } else if (req.method === 'GET' && req.path === '/write') {
            res.sendFile('write.html')
        } else if (req.method === 'GET' && req.path === '/update') {
            res.sendFile('update.html')
        } else if (req.method === 'GET' && req.path === '/view'){
            res.sendFile('view.html')
        }
    })
})

// URL , URI 
// 동적웹페이지 /list , 정적웹페이지 -> /list 

server.on('connection', () => {
    console.log(`connected to client`)
})

server.listen(PORT, HOST, ()=>{
    console.log(`server start`)
})