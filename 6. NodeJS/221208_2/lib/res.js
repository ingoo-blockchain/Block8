const getFileRead = require("./template")
const message = (content) => {
    const body = Buffer.from(content)
    return `HTTP/1.1 200 OK
Connection:Keep-Alive
Content-Type:text/html; charset=UTF-8
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
            console.log(`result : ${response}`)
            client.write(response)
        },
    }
}
