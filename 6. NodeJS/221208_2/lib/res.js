const getFileRead = require("./template")
const message = (content,req={headers:'text/html'}) => {
    const body = Buffer.from(content)
    return `HTTP/1.1 200 OK
Connection:Keep-Alive
Content-Type:${req.headers.Accept}; charset=UTF-8
'Accept-Encoding': ' gzip, deflate, br'
'Accept-Language': ' ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
Content-length:${body.length}

${body.toString()}`
}
// content-encoding
module.exports = (client) => {
    return {
        send: (body) => {
            const response = message(body)
            client.write(response)
        },
        sendFile: (fileName, obj = {}) => {
            const body = getFileRead(fileName, obj)
            const response = message(body)
            client.write(response)
        },
        sendStatic: (filename,req) => {
            const body = getFileRead(filename, {}, 'public')
            const response = message(body,req)
            client.write(response)
        },
        redirect: (path)=> {
            const response = `HTTP/1.1 301 Found
Connection:Close
Location:${path}
Content-type: text/html; charset=UTF-8
Content-length: 0

`
            console.log(response)
            client.write(response)
        }
    }
}
