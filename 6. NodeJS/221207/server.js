const net = require("net")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const body = Buffer.from(`<h1>Hello world!</h1>`)
const response = `HTTP/1.1 200 Ok
Connection: keep-alive
Keep-Alive: timeout=5
Content-type: text/html
Content-length: ${body.length}

${body.toString()}
`

const server = net.createServer((client) => {
    client.setEncoding("utf8")
    client.on("data", (data) => {
        console.log(data) // DataType Buffer

        client.write(response)
    })

    client.on("close", () => {
        console.log("잘가아~~")
    })
})

/*
1: port : 3000
2: host : 127.0.0.1 <-- 내컴퓨터의 host 
3: listen 될경우 실행할 함수 (callback)
*/

server.on("connection", () => {
    console.log("client 가 접속함!")
})

server.listen(PORT, HOST, () => {
    console.log(`Server Listening Port : ${PORT}`)
})
