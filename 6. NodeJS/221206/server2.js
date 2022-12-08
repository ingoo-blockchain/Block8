const net = require("net")
const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST || "127.0.0.1"

const body = Buffer.from(`<h1>Hello World!</h1>`)
const response = `HTTP/1.1 200 Ok
Connection: keep-alive
Keep-Alive: timeout=5
Content-type: ${body.length}

${body}
`

const server = net.createServer((client) => {
    console.log(`Client Connection`, client)

    client.setTimeout(500)
    client.setEncoding("utf8")

    client.on("data", (data) => {
        console.log(data)
        client.write(response)
        client.end()
    })
})

server.on(`error`, (err) => {
    console.log(`err : ${err.code}`)
})

server.listen(port, host, () => {
    console.log(`server listening port ${port}`)
})
