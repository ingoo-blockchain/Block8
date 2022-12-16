const readFile = require('./template') // function
const message = (content,req) => {
    const body = Buffer.from(content)
    let contentType = ''
    if(req.headers.Accept.indexOf('text/html') !== -1) {
        contentType = 'text/html'
    } else {
        contentType = req.headers.Accept
    }
    return `HTTP/1.1 200 OK
Connection:Close
Content-Type:${contentType}; charset=UTF-8
Content-Length:${body.length}

${body.toString()}`
}


module.exports = (socket, req) => {
    return {
        send:(body)=>{
            const response = message(body,req)
            socket.write(response)
        },
        sendFile:(filename,obj={})=>{
            // obj = { name,title:'메인페이지 입니다.' }
            const body = readFile(filename,obj) 
            const response = message(body,req)
            socket.write(response)
        },
        sendStatic:(filename) => { // /css/header.css
            const defaultDir='../public'
            const body = readFile(filename, {}, defaultDir) // body
            const response = message(body,req)
            socket.write(response)
        }
    }
}